import { createContext, useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      const tasksObjectArray: Task[] = JSON.parse(tasksOnLocalStorage);
      setTasks(tasksObjectArray);
    }
  }, []); // Array vazio para executar apenas quando o componente for montado

  return (
    <>
      <TasksContext.Provider
        value={{
          tasks,
          setTasks,
        }}
      >
        {children}
      </TasksContext.Provider>
    </>
  );
};
