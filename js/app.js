// app.js
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

const formulario = document.getElementById('form-turno');
const listaTurnos = document.getElementById('lista-turnos');

let turnos = JSON.parse(localStorage.getItem('turnos')) || [];

function guardarTurnos() {
  localStorage.setItem('turnos', JSON.stringify(turnos));
}

function renderizarTurnos() {
  listaTurnos.innerHTML = '';
  turnos.forEach(turno => {
    const li = document.createElement('li');
    li.textContent = `${turno.nombre} - ${turno.sucursal} - ${turno.horario}`;
    listaTurnos.appendChild(li);
  });
}

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const nuevoTurno = new Turno(
    document.getElementById('nombre').value,
    document.getElementById('telefono').value,
    document.getElementById('direccion').value,
    document.getElementById('dni').value,
    document.getElementById('sucursal').value,
    document.getElementById('horario').value
  );

  turnos.push(nuevoTurno);
  guardarTurnos();
  renderizarTurnos();
  formulario.reset();
});

// Render inicial
renderizarTurnos();
