# CODERHOUSE
Curso de Javascript
Comisión 73445
Alumno: Lucas Curto

Proyecto: 
Preentrega 2


## Simulador elegido: Turnero para Casa de Préstamos - Entrega 2

Este proyecto continúa la evolución del simulador básico de turnos para la casa de préstamos "Préstamos Express S.A.", ahora con una estructura más robusta e interacción directa con el DOM, conforme a los nuevos contenidos vistos en clase.

El simulador permite a los usuarios completar un formulario con sus datos personales, elegir una sucursal y un horario para su turno, y visualizar los turnos generados. A diferencia de la entrega anterior, ya no se utilizan cuadros de diálogo emergentes, sino una interfaz HTML interactiva

## Funcionalidades

- Se captura la información del usuario desde un formulario HTML, sin utilizar `prompt`, `alert` ni `confirm`.

- Los turnos registrados se almacenan en un array y se visualizan dinámicamente en el DOM.

- Se define una clase `Turno` para representar los datos de cada solicitud.

- Se utiliza `localStorage` para conservar los datos entre sesiones del navegador.

- Se incorporan eventos (`submit`) para gestionar la interacción del usuario con el formulario.

- La estructura del HTML y del CSS está organizada en carpetas separadas.

- La lógica del simulador está organizada en funciones modernas y reutilizables.

- Se aplican conocimientos de manipulación del DOM, almacenamiento local, clases, arrays y funciones, según los contenidos dados hasta la unidad 7 del curso.





## Estructura

- La lógica del simulador está organizada en una estructura que responde al flujo de entrada → procesamiento → salida de datos.

- Se define una clase `Turno` que contiene las propiedades necesarias para registrar cada solicitud.

- El evento de envío del formulario (`submit`) desencadena una función anónima que:

- Previene el comportamiento por defecto del formulario.

- Captura y valida los datos ingresados.

- Crea una nueva instancia de `Turno` con los datos proporcionados.

- Agrega ese turno al array principal.

- Actualiza el `localStorage`.

- Vuelve a mostrar la lista completa de turnos en pantalla.

- Limpia el formulario para una nueva entrada.

- Se define una función `mostrarTurnos()` que recorre el array de turnos y actualiza dinámicamente el DOM para mostrar los datos.

- Se utiliza `localStorage` para guardar y recuperar los datos automáticamente al iniciar la página.

## Nota

Esta segunda entrega reemplaza el uso de métodos como `prompt`, `alert` y `console.log` por interacción real con el DOM.

La estructura también incorpora clases y persistencia de datos, lo que permite escalar el proyecto en futuras entregas, en base a conceptos que se incorporen a lo largo del curso.