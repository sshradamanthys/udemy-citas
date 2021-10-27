import { useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

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
          <h2>Administra tu cita</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
