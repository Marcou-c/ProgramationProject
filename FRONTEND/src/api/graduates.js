// src/api/graduates.js
export async function getGraduates() {
    try {
      const respuesta = await fetch('http://localhost:3000/api/graduates');
      if (!respuesta.ok) throw new Error('Error al traer graduados');
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error('Error:', error);
      return []; // Devuelve vacío si falla
    }
  }

  
  export async function addGraduate(graduate) {
    try {
      const response = await fetch("http://localhost:3000/api/graduates", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(graduate)
      });
  
      if (!response.ok) throw new Error("Error al agregar graduado");
      const nuevo = await response.json();
      return nuevo;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  
