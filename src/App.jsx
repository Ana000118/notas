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
  const handleInputBorrar= () => {
    setInputState({
      ...inputState,
    titulo: "", 
    fecha: "", 
    nota: "" });

};
let arregloNotas = JSON.parse(localStorage.getItem ("notas")) || [];
 
const handleInputGuardar = () => {
  arregloNotas.push(inputState);
  localStorage.setItem("notas", JSON.stringify(arregloNotas));
  handleInputBorrar();
  };
  
  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];
    console.log(index);
    arregloNotas.forEach((nota,i) => {
      if (i !== index){
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    arregloNotas =  [...nuevoArreglo];
  };

   return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          {
            arregloNotas.length===0 &&
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario"
          }
          {
            arregloNotas.length !== 0 && (
              <ol>
                {arregloNotas.map((item, index)=>{
                  return(
                    <li>
                      {item.titulo} ({item.fecha}) {item.nota}
                      <i className="bi-x-circle-fill" 
                      onClick={() => handleBorrarNota (index)}
                      style={{
                      color:"red", 
                      fontSize:"0.75rem", 
                      cursor:"pointer",}}></i>
                    </li>
                  )
                })}
              </ol>
            )
          }
        </div>
        <div className="col">
         <h3>Notas</h3><br></br>
         <label className="mb-2"  style={{width: "100%"}}>
          Titulo
         <input 
           id="titulo" 
           name="titulo" 
           type="text"
           onChange={handleInputChange}
           value={inputState.titulo}
           style={{width: "100%"}}
           />
           </label>
           <br/>
           <label className="mb-2" style={{width: "100%"}}>
            Fecha 
            <input 
            id="fecha" 
            name="fecha" 
            type="text"
            onChange={handleInputChange}
            value={inputState.fecha}
            style={{width: "100%"}}
            />
            </label>
            <br/>
            <label className="bm-2" style={{width: "100%"}}>
             Nota 
             <input 
             id="nota" 
             name="nota" 
             type="text"
             onChange={handleInputChange}
             value={inputState.nota}
             style={{width: "100%"}}
             />
            </label>
            <hr></hr>
      <div className="ms-2 me-2 mt-2 row">

      <div className="col">
        <span className="row me-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleInputBorrar}
          >
            Borrar
          </button>
          </span>
        </div>

        <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-primary"
            onClick={handleInputGuardar}>
            Guardar
          </button>
          </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
