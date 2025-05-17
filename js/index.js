// Definición de la clase Turno, que representa cada turno solicitado
class Turno {
  constructor(nombre, telefono, direccion, dni, sucursal, horario) {
    this.nombre = nombre;
    this.telefono = telefono; 
    this.direccion = direccion;
    this.dni = dni;
    this.sucursal = sucursal;
    this.horario = horario;
    this.id = Date.now();
  }
}

// Referencias a elementos del DOM
const formulario = document.getElementById('form-turno'); // Formulario de solicitud de turno
const listaTurnos = document.getElementById('lista-turnos'); // Lista donde se mostrarán los turnos asignados

// Recupera los turnos almacenados en localStorage o inicializa un array vacío
let turnos = JSON.parse(localStorage.getItem('turnos')) || [];

// Esta lógica también se puede escribir usando una estructura if...else. 
// let turnos;
// if (localStorage.getItem('turnos')) {
//   turnos = JSON.parse(localStorage.getItem('turnos'));
// } else {
//   turnos = [];
// }



// Guarda el array de turnos en localStorage
function guardarTurnos() {
  localStorage.setItem('turnos', JSON.stringify(turnos));
}

// Muestra la lista de turnos en pantalla
function mostrarTurnos() {
  listaTurnos.innerHTML = '';
  // Recorre el array de turnos y crea un elemento <li> para cada uno
  turnos.forEach(turno => {
    const li = document.createElement('li');
    li.textContent = `${turno.nombre} - ${turno.sucursal} - ${turno.horario}`;
    listaTurnos.appendChild(li);
  });
}

// Evento que se ejecuta al enviar el formulario
formulario.addEventListener('submit', e => {
  e.preventDefault(); // Evita que se recargue la página al enviar el formulario

  // Crea un nuevo objeto Turno con los datos ingresados
  const nuevoTurno = new Turno(
    document.getElementById('nombre').value,
    document.getElementById('telefono').value,
    document.getElementById('direccion').value,
    document.getElementById('dni').value,
    document.getElementById('sucursal').value,
    document.getElementById('horario').value
  );

  turnos.push(nuevoTurno); // Agrega el nuevo turno al array
  guardarTurnos(); // Guarda los turnos en localStorage
  mostrarTurnos(); // Actualiza la lista en pantalla
  formulario.reset(); // Limpia el formulario
});

// Muestra los turnos al cargar la página
mostrarTurnos();
