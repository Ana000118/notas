import { useState } from "react";


function App() {
  //todo: presentar el concepto de "state"
  
  //hooks
 const [inputState, setInputState] = useState({
   titulo:"",
   fecha:"",
   nota:"",
 });//valor inicial del state
 
  const handleInputChange = (event) => {
    //console.log(event.target.);
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const handleResetChange= () => {
    setInputState({
      ...inputState,
    titulo: "", 
    fecha: "", 
    nota: ""
  });
  };

   return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlfor="titulo">Titulo</label>
      <input 
      id="titulo" 
      name="titulo" 
      type="text"
      onChange={handleInputChange}
      value={inputState.titulo}
      />

      <br/>
      <label htmlfor="fecha">Fecha</label>
      <input 
      id="fecha" 
      name="fecha" 
      type="text"
      onChange={handleInputChange}
      value={inputState.fecha}
      />

      <br/>
      <label htmlfor="nota">Nota</label>
      <input 
      id="nota" 
      name="nota" 
      type="text"
      onChange={handleInputChange}
      value={inputState.nota}
      />

       <button 
          type="button" 
          className="btn btn-primary mx-2" 
          onClick={handleResetChange}
          style={{marginLeft:"15px"}}
        >Reset
        </button>
     
    </div>
  );
}

export default App;
