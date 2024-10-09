// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api", // Asegúrate de que la URL coincida con tu configuración
});

// Puedes agregar interceptores si es necesario aquí

export default instance;
