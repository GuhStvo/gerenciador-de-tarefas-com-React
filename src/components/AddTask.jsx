import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verifica se os campos estão preenchidos
          if (!title.trim()) {
            alert("Por favor, preencha o título da tarefa");
            return; // Para a execução da função
          }
          // CASO QUEIRA FAZER A MESMA VERIFICAÇÃO PARA A DESCRIÇÃO
          // if (!description.trim()) {
          //   alert("Por favor, preencha a descrição da tarefa");
          //   return;
          // }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
