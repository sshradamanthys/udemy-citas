import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // Se ejecuta cuando el componente esta listo o se actualiza
  useEffect(() => {
    // se evalua el local storage
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (!citasIniciales) {
      citasIniciales = [];
    }
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => setCitas([...citas, cita]);

  // Function que elimina una cita por ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
