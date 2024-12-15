import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  // FUNCTION PARA VERIFICAR SE A DESCRIÇÃO ESTÁ VAZIA
  function descriptionMessage() {
    if (description === "") {
      return "Sem descrição";
    }
    return description;
  }
  return (
    <div className="max-w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          {/* TITULO DA PÁGINA */}
          <Title >Detalhes da tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow">
          <h2 className="text-xl text-slate-600  font-bold">{title}</h2>
          <p className="text-slate-600">{descriptionMessage()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;