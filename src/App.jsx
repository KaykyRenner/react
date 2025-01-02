import { useState } from "react";
import AddTask from './componentes/addTask'
import Task from './componentes/task'
function App(){
  return(
    <div>
     <AddTask/>
     <Task/>
    </div>
  )
}
export default App;