// utilidades.js - Módulo de utilidades

const gerarId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };
  
  module.exports = {
    gerarId
  };