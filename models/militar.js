// models/militar.js
const mongoose = require('mongoose');

const MilitarSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  nombres: {
    type: String,
    required: true,
    trim: true
  },
  cedula: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  genero: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: true
  },
  nacimiento: {
    type: Date,
    required: true
  },
  tel: {
    type: String,
    required: true,
    trim: true
  },
  grado: {
    type: String,
    required: true,
    enum: [
      'General en Jefe', 'Mayor General', 'General de División', 'General de Brigada',
      'Coronel', 'Teniente Coronel', 'Mayor',
      'Capitán', 'Primer Teniente', 'Teniente',
      'Sargento Supervisor', 'Sargento Ayudante', 'Sargento Mayor de Primera',
      'Sargento Mayor de Segunda', 'Sargento Mayor de Tercera', 'Sargento Primero', 'Sargento Segundo',
      'Cabo Primero', 'Cabo Segundo', 'Distinguido', 'Soldado',
      'Bachiller egresado de la UNEFA o de los Liceos Militares del Componente'
    ]
  },
  pase_reserva: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      'Efectivo Oficial de Comando', 'Efectivo Oficial Técnico', 'Efectivo Oficial de Tropa',
      'Oficial Asimilado', 'Oficial Asimilado Técnico', 'Tropa Profesional', 'Tropa alistada'
    ]
  },
  arma: {
    type: String,
    required: true,
    enum: [
      'Infantería', 'Caballería', 'Blindado', 'Artillería', 'Ingeniería', 'Defensa Antiaérea',
      'Inteligencia Militar', 'Contrainteligencia Militar', 'Comunicaciones e Informática',
      'Fuerzas Especiales', 'Policía Militar', 'Armamento', 'Transporte',
      'Alimentación', 'Intendencia', 'Sanidad', 'Mando', 'Músico Militar', 'Aviación', 'Otros'
    ]
  },
  estado: {
    type: String,
    required: true,
    enum: [
      'Caracas D.C.', 'Amazonas', 'Anzoátegui', 'Apure', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes',
      'Delta Amacuro', 'Falcón', 'Guárico', 'Guayana Esequiba', 'Lara', 'La Guaira', 'Mérida',
      'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Yaracuy', 'Zulia'
    ]
  },
  municipio: {
    type: String,
    required: true
  },
  miliciano: {
    type: String,
    required: true,
    enum: ['Sí', 'No']
  },
  discapacidad: {
    type: String,
    required: true,
    enum: ['Ninguna', 'Visual', 'Auditiva', 'Motriz', 'Intelectual', 'Psicosocial', 'Múltiple']
  },
  edad: {
    type: Number,
    required: true
  },
  tipo_res: {
    type: String,
    required: true,
    enum: ['Reserva Activa', 'Reserva Militar']
  },
  clasificacion: {
    type: String,
    required: true,
    enum: ['General', 'Oficial Superior', 'Oficial Subalterno', 'Tropa Profesional', 'Tropa Alistada Entrenada', 'Tropa Alistada No Entrenada']
  },
  observacion: {
    type: String,
    default: ''
  },
  matricula: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ucres_a: {
    type: String,
    required: true,
    trim: true
  },
  sitio: {
    type: String,
    required: true,
    trim: true
  },
  direccion: {
    type: String,
    required: true,
    trim: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Militar', MilitarSchema);
