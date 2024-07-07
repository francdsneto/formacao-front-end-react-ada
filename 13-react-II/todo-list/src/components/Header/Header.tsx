import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPendingTasks = tasks.reduce((pending, task) => {
    return !task.done ? (pending += 1) : pending;
  }, 0);
  const totalDoneTasks = totalTasks - totalPendingTasks;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          <span>Bem vindo, Neto!</span>
        </div>
        <div>
          <StatsCard title="Total de tarefas" value={totalTasks} />
          <StatsCard title="Tarefas pendentes" value={totalPendingTasks} />
          <StatsCard title="Tarefas concluidas" value={totalDoneTasks} />
        </div>
      </div>
    </header>
  );
};
