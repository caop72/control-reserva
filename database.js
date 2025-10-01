// Carga automáticamente las variables de entorno definidas en un archivo .env
import "https://deno.land/std@0.188.0/dotenv/load.ts";
// Importa MongoClient desde el paquete oficial mongodb para Deno
import { MongoClient } from "npm:mongodb@6.1.0";

// Obtiene la URI de conexión a MongoDB desde las variables de entorno
const MONGO_URI = Deno.env.get("MONGO_URI");

if (!MONGO_URI) {
  throw new Error("La variable de entorno MONGO_URI no está configurada");
}

// Crea la instancia del cliente MongoDB para conectarse a la base de datos
const client = new MongoClient();

async function connect() {
  try {
    // Intentar conectar con MongoDB usando la URI proporcionada
    await client.connect(MONGO_URI);
    console.log("Conectado a MongoDB correctamente");
  } catch (error) {
    // Mostrar error en caso de no lograr la conexión
    console.error("Error al conectar a MongoDB:", error);
  }
}

// Ejecuta la función de conexión
await connect();

// Exportamos la base de datos con el nombre real "formulario_r"
export const db = client.db("formulario_r");

// Exportamos la colección "usuario", inicialmente la colección a la que accedemos
export const usuario = db.collection("usuario");

// Ejemplos futuros para agregar otras colecciones:
// export const productos = db.collection("productos");
// export const ordenes = db.collection("ordenes");
// export const clientes = db.collection("clientes");
