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
  }

   return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
        </div>
        <div className="col">
         <h3>Notas</h3><br></br>
         <label className="mb-2">
          Titulo
         <input 
           id="titulo" 
           name="titulo" 
           type="text"
           onChange={handleInputChange}
           value={inputState.titulo}
           />
           </label>
           <br/>
           <label className="mb-2">
            Fecha 
            <input 
            id="fecha" 
            name="fecha" 
            type="text"
            onChange={handleInputChange}
            value={inputState.fecha}
            />
            </label>
            <br/>
            <label className="bm-2">
             Nota 
             <input 
             id="nota" 
             name="nota" 
             type="text"
             onChange={handleInputChange}
             value={inputState.nota}
             />
            </label>
          </div>
        </div>
        <hr/>
        <div className="bm-2">
         <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleResetChange}>
          Reset
          </button>
        </div>
      </div>
  );
}

export default App;
