import { useState } from "react";

function App() {
  const [task,setTask] = useState([{
    id:1,
    title:'estudar programação',
  }])
  return (    
    <div className="divPrincipalGerenciador">
      <div className="divGerenciador">
        <h1 className="gerenciadorDeTarefas" >
          Gerenciador de Tarefas
        </h1>
      </div>
    </div>
  );
}

export default App;
