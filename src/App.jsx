import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Adicione a dependência tasks

  //DESCOMENTE O CÓDIGO ABAIXO PARA CHAMAR UMA API
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     // CHAMAR API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=5",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     // PEGAR OS DADOS QUE ELA RETORNA
  //     const data = await response.json();

  //     // ARMAZENAR OS DADOS NO STATE
  //     setTasks(data);
  //   };
  //   // SE QUISER VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREAFS
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Atualizar apenas a tarefa com o ID correspondente
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task; // Não atualizar as outras tarefas
    });
    setTasks(newTasks);
  }

  function onTrashClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="max-w-screen min-h-screen  bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
