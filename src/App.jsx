function App() {
  let varprueba ="Titulo"

  const handleChangePrueba = (event) => {
    varprueba = event.target.value
  };
   return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlfor="pruebaID">Input de prueba</label>
      <input 
      id="pruebaID" 
      name="prueba" 
      type="text"
      onChange={handleChangePrueba}
      value={varprueba}

      />
    </div>
  );
}

export default App;
