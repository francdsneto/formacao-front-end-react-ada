import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  Task,
  TasksContext,
  TasksContextData,
} from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTasktTitle] = useState("");

  const { tasks, setTasks }: TasksContextData = useContext(TasksContext);

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

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function handleRemoveTaskClick(taskId: number) {
    const newTasks = tasks.filter((task) => {
      return task.id != taskId;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

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
                checked={task.done}
                onChange={(event) => handleToggleTaskStatus(task.id)}
              />
              <label
                htmlFor={String(task.id)}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>
              <button onClick={() => handleRemoveTaskClick(task.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
