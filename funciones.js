// Actualiza municipios al cambiar estado
function actualizarMunicipios() {
  const estadoSelect = document.getElementById('estado');
  const municipioSelect = document.getElementById('municipio');
  const sitioInput = document.getElementById('sitio');
  const direccionInput = document.getElementById('direccion');

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
  const estadoSelect = document.getElementById('estado');
  const municipioSelect = document.getElementById('municipio');
  const sitioInput = document.getElementById('sitio');
  const direccionInput = document.getElementById('direccion');

  const estado = estadoSelect.value;
  const municipio = municipioSelect.value;
  const ubicacion = ubicaciones[estado]?.find(loc => loc.municipio === municipio);

  sitioInput.value = ubicacion ? ubicacion.sitio : '';
  direccionInput.value = ubicacion ? ubicacion.direccion : '';
}

// Validación Paso 1: email
function validarPaso1() {
  const email = document.getElementById('email').value.trim();
  if (!email) {
    alert('Por favor ingrese su correo electrónico.');
    document.getElementById('email').focus();
    return false;
  }
  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!reEmail.test(email)) {
    alert('Formato de correo electrónico incorrecto.');
    document.getElementById('email').focus();
    return false;
  }
  return true;
}

function validarPaso2() {
  const nombres = document.getElementById('nombres').value.trim();
  if (!nombres) {
    alert('Por favor ingrese sus nombres y apellidos.');
    document.getElementById('nombres').focus();
    return false;
  }
  const cedula = document.getElementById('cedula').value.trim();
  if (!cedula) {
    alert('Por favor ingrese su cédula de identidad.');
    document.getElementById('cedula').focus();
    return false;
  }
  // Validar cédula solo números y longitud razonable
  if (!/^\d{6,8}$/.test(cedula)) {
    alert('La cédula debe contener entre 6 y 8 dígitos numéricos.');
    document.getElementById('cedula').focus();
    return false;
  }
  const genero = document.getElementById('genero').value;
  if (!genero) {
    alert('Por favor seleccione su género.');
    document.getElementById('genero').focus();
    return false;
  }
  const nacimiento = document.getElementById('nacimiento').value;
  if (!nacimiento) {
    alert('Por favor ingrese su fecha de nacimiento.');
    document.getElementById('nacimiento').focus();
    return false;
  }
  const telInput = document.getElementById('telefono').value.trim();
  if (!telInput) {
    alert('Por favor ingrese su teléfono.');
    document.getElementById('telefono').focus();
    return false;
  }

  // Validar que el usuario ingrese: tres dígitos, un espacio, siete dígitos
  // ejemplo: 426 6181621
  const reVenezuelaUsuario = /^\d{3}\s\d{7}$/;
  if (!reVenezuelaUsuario.test(telInput)) {
    alert('Por favor ingrese el número en formato correcto: tres dígitos de la línea, espacio, siete dígitos.\nEjemplo: 426 6181621');
    document.getElementById('telefono').focus();
    return false;
  }

  return true;
}

// Validación Paso 3: grado, pase_reserva, categoria, arma
function validarPaso3() {
  const grado = document.getElementById('grado').value;
  if (!grado) {
    alert('Por favor seleccione su grado o jerarquía.');
    document.getElementById('grado').focus();
    return false;
  }
  const pase_reserva = document.getElementById('pase_reserva').value;
  if (!pase_reserva) {
    alert('Por favor indique en que año pasó a la reserva.');
    document.getElementById('pase_reserva').focus();
    return false;
  }
  const categoria = document.getElementById('categoria').value;
  if (!categoria) {
    alert('Por favor seleccione su categoría.');
    document.getElementById('categoria').focus();
    return false;
  }
  const arma = document.getElementById('arma').value;
  if (!arma) {
    alert('Por favor seleccione su arma o servicio.');
    document.getElementById('arma').focus();
    return false;
  }
  return true;
}

// Validación Paso 4: estado, municipio, miliciano, discapacidad
function validarPaso4() {
  const estadoSelect = document.getElementById('estado');
  const municipioSelect = document.getElementById('municipio');
  if (!estadoSelect.value) {
    alert('Por favor seleccione un estado.');
    estadoSelect.focus();
    return false;
  }
  if (!municipioSelect.value) {
    alert('Por favor seleccione un municipio.');
    municipioSelect.focus();
    return false;
  }
  const milicianoSelect = document.getElementById('miliciano');
  if (!milicianoSelect.value) {
    alert('Por favor seleccione si es miliciano.');
    milicianoSelect.focus();
    return false;
  }
  const discapacidadSelect = document.getElementById('discapacidad');
  if (!discapacidadSelect.value) {
    alert('Por favor seleccione su tipo de discapacidad.');
    discapacidadSelect.focus();
    return false;
  }
  return true;
}

// Calcular edad desde fecha nacimiento
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


function generarMatriculaDesdeCedula(cedula) {
  return hashSimple(cedula);
}

// Preparar datos para Paso 5, actualizado
function prepararDatosPaso5() {
  const fechaNacimiento = document.getElementById('nacimiento').value;
  const cedula = document.getElementById('cedula').value;
  const edad = calcularEdad(fechaNacimiento);
  const matricula = generarMatriculaDesdeCedula(cedula);

  document.getElementById('edad_oculta').value = edad;
  document.getElementById('matricula_oculta').value = matricula;

  // Calculamos tipo_res y clasificación según grado (ejemplo)
  const grado = document.getElementById('grado').value;
  let tipo_res = '';
  let clasificacion = '';

  const activas = ['General en Jefe', 'Mayor General', 'General de División', 'General de Brigada', 'Coronel', 'Teniente Coronel', 'Mayor', 'Capitán', 'Primer Teniente', 'Teniente', 'Sargento Supervisor', 'Sargento Ayudante', 'Sargento Mayor de Primera', 'Sargento Mayor de Segunda', 'Sargento Mayor de Tercera', 'Sargento Primero', 'Sargento Segundo'];
  if (activas.includes(grado)) {
    tipo_res = 'Reserva Activa';
  } else {
    tipo_res = 'Reserva Militar';
  }

  if (['General en Jefe', 'Mayor General', 'General de División', 'General de Brigada'].includes(grado)) {
    clasificacion = 'General';
  } else if (['Coronel', 'Teniente Coronel', 'Mayor'].includes(grado)) {
    clasificacion = 'Oficial Superior';
  } else if (['Capitán', 'Primer Teniente', 'Teniente'].includes(grado)) {
    clasificacion = 'Oficial Subalterno';
  } else if (['Sargento Supervisor', 'Sargento Ayudante', 'Sargento Mayor de Primera', 'Sargento Mayor de Segunda', 'Sargento Mayor de Tercera', 'Sargento Primero', 'Sargento Segundo'].includes(grado)) {
    clasificacion = 'Tropa Profesional';
  } else {
    clasificacion = 'Tropa Alistada'; // o No Entrenada según lógica
  }

  document.getElementById('tipo_res_oculto').value = tipo_res;
  document.getElementById('clasificacion_oculto').value = clasificacion;
}

// Mostrar datos preliminares en paso 6 para confirmación
function mostrarDatosPreliminaresPaso6() {
  document.getElementById('mostrarGrado').textContent = document.getElementById('grado').value || 'N/A';
  document.getElementById('mostrarNombre').textContent = document.getElementById('nombres').value || 'N/A';
  document.getElementById('mostrarCedula').textContent = document.getElementById('cedula').value || 'N/A';
  document.getElementById('mostrarMatricula').textContent = document.getElementById('matricula_oculta').value || 'N/A';
  document.getElementById('mostrarUcres').textContent = document.getElementById('ucres_a')?.value || 'Por asignar';
  document.getElementById('mostrarSitio').textContent = document.getElementById('sitio')?.value || 'N/A';
  document.getElementById('mostrarDireccion').textContent = document.getElementById('direccion')?.value || 'N/A';
}

// Funciones para navegación de pasos
function mostrarPaso(n) {
  const pasos = document.querySelectorAll('.step');
  pasos.forEach((paso, index) => {
    paso.classList.toggle('hidden', index !== (n - 1));
  });
}

function animarBarraProgreso(callback) {
  let ancho = 0;
  const barra = document.getElementById('barraProgreso');
  const porcentaje = document.getElementById('porcentajeProgreso');

  const intervalo = setInterval(() => {
    if (ancho >= 100) {
      clearInterval(intervalo);
      if (callback) callback();
    } else {
      ancho += 5;
      barra.style.width = ancho + '%';
      porcentaje.textContent = ancho + '%';
    }
  }, 150);
}

function procesarYPasarPaso6() {
  mostrarPaso(5);
  animarBarraProgreso(() => {
    mostrarDatosPreliminaresPaso6();
    mostrarPaso(6);
  });
}

// Envío asincrónico para asignación UCRES y matrícula
async function asignarUcresYMatrícula() {
  mostrarPaso(7);

  const datos = {
    cedula: document.getElementById('cedula').value,
    grado: document.getElementById('grado').value,
    nombres: document.getElementById('nombres').value,
    sitio: document.getElementById('sitio').value,
    tipo_res: document.getElementById('tipo_res_oculto').value,
    clasificacion: document.getElementById('clasificacion_oculto').value
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
      mostrarPaso(6);
    }
  } catch (error) {
    alert('Error de conexión o servidor: ' + error.message);
    mostrarPaso(6);
  }
}

// Control navegación general con validaciones robustecidas
document.getElementById('next1').addEventListener('click', function(event) {
  event.preventDefault();
  if (validarPaso1()) mostrarPaso(2);
});
document.getElementById('prev2').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarPaso(1);
});
document.getElementById('next2').addEventListener('click', function(event) {
  event.preventDefault();
  if (validarPaso2()) mostrarPaso(3);
});
document.getElementById('prev3').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarPaso(2);
});
document.getElementById('next3').addEventListener('click', function(event) {
  event.preventDefault();
  if (validarPaso3()) mostrarPaso(4);
});
document.getElementById('next4').addEventListener('click', function(event) {
  event.preventDefault();
  if (validarPaso4()) {
    prepararDatosPaso5();
    procesarYPasarPaso6();
  }
});
document.getElementById('prev4').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarPaso(3);
});

// Inicializar con primer paso visible
mostrarPaso(1);

function asignarTipoResYClasificacion(grado) {
  const reservaActiva = [
    'General en Jefe', 'Mayor General', 'General de División', 'General de Brigada',
    'Coronel', 'Teniente Coronel', 'Mayor', 'Capitán', 'Primer Teniente', 'Teniente',
    'Sargento Supervisor', 'Sargento Ayudante', 'Sargento Mayor de Primera',
    'Sargento Mayor de Segunda', 'Sargento Mayor de Tercera', 'Sargento Primero', 'Sargento Segundo'
  ];

  const clasificaciones = {
    'General': ['General en Jefe', 'Mayor General', 'General de División', 'General de Brigada'],
    'Oficial Superior': ['Coronel', 'Teniente Coronel', 'Mayor'],
    'Oficial Subalterno': ['Capitán', 'Primer Teniente', 'Teniente'],
    'Tropa Profesional': [
      'Sargento Supervisor', 'Sargento Ayudante', 'Sargento Mayor de Primera',
      'Sargento Mayor de Segunda', 'Sargento Mayor de Tercera', 'Sargento Primero', 'Sargento Segundo'
    ],
    'Tropa Alistada': [
      'Cabo Primero', 'Cabo Segundo', 'Distinguido', 'Soldado'
    ]
  };

  let tipo_res = reservaActiva.includes(grado) ? 'Reserva Activa' : 'Reserva Militar';

  let clasificacion = 'Tropa Alistada'; // Por defecto
  for (const [key, grados] of Object.entries(clasificaciones)) {
    if (grados.includes(grado)) {
      clasificacion = key;
      break;
    }
  }

  return { tipo_res, clasificacion };
}

async function asignarUcresYMatricula(datosUsuario) {
  try {
    const response = await fetch('/api/asignar-ucres-matricula', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosUsuario),
    });

    const resultado = await response.json();

    if (resultado.exito) {
      document.getElementById('mostrarUcres').textContent = resultado.ucres;
      document.getElementById('mostrarMatricula').textContent = resultado.matricula;
      // Mostrar paso confirmación
      mostrarPaso(8);
    } else {
      alert('Error al asignar matrícula: ' + resultado.mensaje);
      mostrarPaso(6); // Retroceder para corrección
    }
  } catch (error) {
    alert('Error de conexión o servidor: ' + error.message);
    mostrarPaso(6);
  }
}

const grado = document.getElementById('grado').value;
const municipio = document.getElementById('municipio').value;
const { tipo_res, clasificacion } = asignarTipoResYClasificacion(grado);

const datosUsuario = {
  cedula: document.getElementById('cedula').value,
  grado,
  tipo_res,
  clasificacion,
  municipio,
  sitio: document.getElementById('sitio').value,
  direccion: document.getElementById('direccion').value
};

asignarUcresYMatricula(datosUsuario);
