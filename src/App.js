import React, {useState} from "react";

function App(){

  const [contador, setContador] = useState(0);
  
  return(
    <div>
    <p>You clicked {contador}</p>
    <button onClick={()=> setContador(contador + 1)}>Aumentar</button>
    </div>
  )
}

export default App;
