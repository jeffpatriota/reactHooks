import React, { useState, useEffect, useMemo, useCallback } from "react";



function App() {

  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=> {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){                      //mostra as informações do localStorage na tela 
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[]);

  useEffect(()=> {
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  }, [tarefas]); // vai adicionar todos os arrays colocados no campo de tarefas no local storage 

  const handleAdd = useCallback(()=>{
    setTarefas([...tarefas, input]);
    setInput("");
  }, [input, tarefas]);

  const totalTarefa = useMemo(()=>tarefas.length,[tarefas]);



  return (
    <div >
      <ul>
        {tarefas.map(tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefa} tarefas!</strong><br/>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;

