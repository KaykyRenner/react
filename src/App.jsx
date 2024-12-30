import { useState } from "react";

function App(){
  const [message,setMessage] = useState('click no butao para mudar')
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={
        ()=>{
          setMessage('fui clicado')
        }
      }>mudar frase</button>
    </div>
  )
}
export default App;