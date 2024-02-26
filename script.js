const data Atual = new Date().toLocalDateString('pt-BR');console.logdataAtual);

const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
console.log(`${horas}:${minutos}:${segundos}`);