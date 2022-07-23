// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyByl2ZKVApYjR2CBePMp83nAP0raxS0XnU",
  authDomain: "proyecto-arquitectura-prueba.firebaseapp.com",
  projectId: "proyecto-arquitectura-prueba",
  storageBucket: "proyecto-arquitectura-prueba.appspot.com",
  messagingSenderId: "682286976176",
  appId: "1:682286976176:web:612dd3a2e46a8450ee7f75",
  measurementId: "G-2DN45J5WKJ"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
