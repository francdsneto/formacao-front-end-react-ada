import { FormEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Tasks: React.FC = () => {
  interface Task {
    id: number;
    title: string;
    done: boolean;
  }

  const [taskTitle, setTasktTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  /**
   * Função disparada quando se submete o formulário
   * @param event
   */
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras");
      return;
    }

    const newTasks = [
      ...tasks, // pega todos os valores que já existiam em tasks e adiciona esse novo array que está sendo setado no estado tasks
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTasktTitle("");
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      const tasksObjectArray: Task[] = JSON.parse(tasksOnLocalStorage);
      setTasks(tasksObjectArray);
    }
  }, []); // Array vazio para executar apenas quando o componente for montado

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            type="text"
            name=""
            id="task-title"
            onChange={(event) => {
              setTasktTitle(event.target.value);
            }}
            placeholder="Título da Tarefa"
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                name=""
                id={String(task.id)}
                onClick={(event) => (task.done = !task.done)}
              />
              <label htmlFor={String(task.id)}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
