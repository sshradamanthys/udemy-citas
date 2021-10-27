import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  const crearCita = (cita) => setCitas([...citas, cita]);

  return (
    <>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h2>Lista</h2>
        </div>
      </div>
    </>
  );
}

export default App;
