// Actualiza municipios al cambiar estado
function actualizarMunicipios() {
  const estadoSelect = document.getElementById('Estado');
  const municipioSelect = document.getElementById('Municipio');
  const sitioInput = document.getElementById('Sitio');
  const direccionInput = document.getElementById('Direccion');

  const estado = estadoSelect.value;
  municipioSelect.innerHTML = '<option value="" disabled selected>Seleccione un Municipio</option>';
  sitioInput.value = '';
  direccionInput.value = '';

  if (ubicaciones[estado]) {
    ubicaciones[estado].forEach(({ municipio }) => {
      const option = document.createElement('option');
      option.value = municipio;
      option.textContent = municipio;
      municipioSelect.appendChild(option);
    });
    municipioSelect.disabled = false;
  } else {
    municipioSelect.disabled = true;
  }
}

// Actualiza sitio y dirección al cambiar municipio
function actualizarSitioYDireccion() {
  const estadoSelect = document.getElementById('Estado');
  const municipioSelect = document.getElementById('Municipio');
  const sitioInput = document.getElementById('Sitio');
  const direccionInput = document.getElementById('Direccion');

  const estado = estadoSelect.value;
  const municipio = municipioSelect.value;
  const ubicacion = ubicaciones[estado]?.find(loc => loc.municipio === municipio);

  sitioInput.value = ubicacion ? ubicacion.sitio : '';
  direccionInput.value = ubicacion ? ubicacion.direccion : '';
}

// Validación simple para los campos Miliciano y Discapacidad (puede extenderse)
function validarPaso4() {
  const milicianoSelect = document.getElementById('Miliciano');
  const discapacidadSelect = document.getElementById('Discapacidad');

  if (!milicianoSelect.value) {
    alert('Por favor seleccione si es miliciano.');
    milicianoSelect.focus();
    return false;
  }

  if (!discapacidadSelect.value) {
    alert('Por favor seleccione su tipo de discapacidad.');
    discapacidadSelect.focus();
    return false;
  }

  // Validar selects Estado y Municipio también, si no están en otro lugar
  const estadoSelect = document.getElementById('Estado');
  const municipioSelect = document.getElementById('Municipio');

  if (!estadoSelect.value || !municipioSelect.value) {
    alert('Por favor seleccione Estado y Municipio.');
    return false;
  }

  return true;
}

// Función para calcular edad desde fecha nacimiento (YYYY-MM-DD)
function calcularEdad(fechaNacimientoStr) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimientoStr);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const mesNacimiento = nacimiento.getMonth();
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

// Hash simple para generar matrícula alfanumérica desde cédula
function hashSimple(texto) {
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    hash = (hash << 5) - hash + texto.charCodeAt(i);
    hash |= 0; // Convertir a entero 32 bits
  }
  return Math.abs(hash).toString(36).substring(0, 6).toUpperCase();
}

function generarMatriculaDesdeCedula(cedula) {
  return hashSimple(cedula);
}

// Preparar datos para Paso 5, se llama antes de mostrar el paso
function prepararDatosPaso5() {
  const fechaNacimiento = document.getElementById('nacimiento').value;
  const cedula = document.getElementById('cedula').value;
  const tipo_res = document.getElementById('tipo_res') ? document.getElementById('tipo_res').value : '';
  const clasificacion = document.getElementById('clasificacion') ? document.getElementById('clasificacion').value : '';

  const edad = calcularEdad(fechaNacimiento);
  const matricula = generarMatriculaDesdeCedula(cedula);

function mostrarDatosPreliminaresPaso6(datos) {
  document.getElementById('mostrarMatricula').textContent = datos.matricula || '';
  document.getElementById('mostrarUcres').textContent = datos.ucres || '';
  document.getElementById('mostrarGrado').textContent = datos.grado || '';
  document.getElementById('mostrarNombre').textContent = datos.nombres || '';
  document.getElementById('mostrarCedula').textContent = datos.cedula || '';
  document.getElementById('mostrarSitio').textContent = datos.sitio || '';
    document.getElementById('mostrarDireccion').textContent = datos.direccion || '';
}
  
  // Guardar en campos ocultos (añadir estos inputs en tu formulario)
  document.getElementById('edad_oculta').value = edad;
  document.getElementById('matricula_oculta').value = matricula;
  if (document.getElementById('tipo_res_oculto')) {
    document.getElementById('tipo_res_oculto').value = tipo_res;
  }
  if (document.getElementById('clasificacion_oculto')) {
    document.getElementById('clasificacion_oculto').value = clasificacion;
  }
}

// Unificada función para mostrar paso n y ocultar otros
function mostrarPaso(n) {
  const pasos = document.querySelectorAll('.step');
  pasos.forEach((paso, index) => {
    paso.classList.toggle('hidden', index !== (n - 1));
  });
}

// Barra de progreso animada para Paso 5
function animarBarraProgreso(callback) {
  let ancho = 0;
  const barra = document.getElementById('barraProgreso');
  const porcentaje = document.getElementById('porcentajeProgreso');

  const intervalo = setInterval(() => {
    if (ancho >= 100) {
      clearInterval(intervalo);
      if (callback) callback();
    } else {
      ancho += 5; // incrementa 5% cada 150ms
      barra.style.width = ancho + '%';
      porcentaje.textContent = ancho + '%';
    }
  }, 150);
}

// Función para simular proceso y avanzar a paso 6 con datos preliminares
function mostrarDatosPreliminaresPaso6() {
  document.getElementById('mostrarGrado').textContent = document.getElementById('grado').value || 'N/A';
  document.getElementById('mostrarNombre').textContent = document.getElementById('nombre').value || 'N/A';
  document.getElementById('mostrarCedula').textContent = document.getElementById('cedula').value || 'N/A';
  document.getElementById('mostrarMatricula').textContent = document.getElementById('matricula_oculta').value || 'N/A';
  document.getElementById('mostrarUcres').textContent = document.getElementById('ucres_a_oculto') ? document.getElementById('ucres_a_oculto').value : 'Por asignar';
  document.getElementById('mostrarSitio').textContent = document.getElementById('sitio_oculta').value || 'N/A';
  document.getElementById('mostrarDireccion').textContent = document.getElementById('direccion_oculta').value || 'N/A';
}

function mostrarPaso6() {
  mostrarDatosPreliminaresPaso6();
  mostrarPaso(6);
}

function procesarYPasarPaso6() {
  mostrarPaso(5);
  animarBarraProgreso(() => {
    mostrarPaso6();
  });
}

async function asignarUcresYMatrícula() {
  mostrarPaso(7);

  const datos = {
    cedula: document.getElementById('cedula').value,
    grado: document.getElementById('grado').value,
    nombre: document.getElementById('nombre').value,
    sitio: document.getElementById('sitio').value,
    tipo_res: document.getElementById('tipo_res_oculto').value,
    clasificacion: document.getElementById('clasificacion_oculto').value,
  };

  try {
    const respuesta = await fetch('/api/asignar-ucres-matricula', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();

    if (resultado.exito) {
      document.getElementById('mostrarUcres').textContent = resultado.ucres;
      document.getElementById('mostrarMatricula').textContent = resultado.matricula;
      mostrarPaso(8);
    } else {
      alert('Error en asignación: ' + resultado.mensaje);
    }
  } catch (error) {
    alert('Error en conexión o servidor: ' + error.message);
  }
}

// Obtenemos el formulario y todos los pasos (secciones con clase "step")
const form = document.getElementById('formRegistrar');
const steps = form.querySelectorAll('.step');

let currentStep = 0; // índice del paso actual

// Función para mostrar un paso y ocultar los demás
function mostrarPaso(stepIndex) {
  steps.forEach((step, i) => {
    step.classList.toggle('hidden', i !== stepIndex);
  });
  currentStep = stepIndex;
}

// Avanzar al siguiente paso
function avanzarPaso() {
  if (currentStep < steps.length - 1) {
    mostrarPaso(currentStep + 1);
  }
}

// Retroceder al paso anterior
function retrocederPaso() {
  if (currentStep > 0) {
    mostrarPaso(currentStep - 1);
  }
}

// Ejemplo para activar buttons para avanzar y retroceder (usa tus IDs)
document.getElementById('next1').addEventListener('click', function(event) {
  event.preventDefault();
  // Aquí puedes agregar validación del paso 1 antes de avanzar
  avanzarPaso();
});
document.getElementById('prev2').addEventListener('click', function(event){
  event.preventDefault();
  retrocederPaso();
});
document.getElementById('next2').addEventListener('click', function(event){
  event.preventDefault();
  // Aquí validaciones para paso 2
  avanzarPaso();
});
document.getElementById('prev3').addEventListener('click', function(event){
  event.preventDefault();
  retrocederPaso();
});
document.getElementById('next3').addEventListener('click', function(event){
  event.preventDefault();
  avanzarPaso();
});

// Iniciar mostrando el primer paso cuando carga la página
mostrarPaso(0);












