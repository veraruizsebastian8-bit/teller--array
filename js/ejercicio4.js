
const estudiantes = [
  { nombre: "Ana Torres", edad: 14, curso: "9A" },
  { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
  { nombre: "Lucía Gómez", edad: 13, curso: "8A" },
  { nombre: "Samuel Díaz", edad: 16, curso: "11A" },
  { nombre: "Valentina Cruz", edad: 14, curso: "9B" }
];

function buscarEstudiante() {
  const input = document.getElementById("nombreEstudiante");
  const contenedorResultado = document.getElementById("resultado");

  
  const nombreBuscado = input.value.trim().toLowerCase();


  if (nombreBuscado === "") {
    contenedorResultado.innerHTML = "<p style='color: orange;'>Por favor, escribe el nombre de un estudiante.</p>";
    return;
  }

  
  const estudianteEncontrado = estudiantes.find(
    (est) => est.nombre.toLowerCase() === nombreBuscado
  );

  
  if (estudianteEncontrado) {
    contenedorResultado.innerHTML = `
      <h3>Ficha del Estudiante</h3>
      <p><strong>Nombre:</strong> ${estudianteEncontrado.nombre}</p>
      <p><strong>Edad:</strong> ${estudianteEncontrado.edad} años</p>
      <p><strong>Curso:</strong> ${estudianteEncontrado.curso}</p>
    `;
  } else {
    contenedorResultado.innerHTML = "<p style='color: red;'>El estudiante no fue encontrado.</p>";
  }
}
