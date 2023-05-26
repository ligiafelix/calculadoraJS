let operando1 = '';
let operando2 = '';
let operacao = '';
function botaoClicado(valor) {
  const resultado = document.getElementById('resultado');

  if (valor === 'C') {
    operando1 = '';
    operando2 = '';
    operacao = '';
    resultado.value = '';
  } else if (valor === '/' || valor === '*' || valor === '-' || valor === '+') {
    operacao = valor;
    operando1 = resultado.value;
    resultado.value = '';
  } else if (valor === '=') {
    operando2 = resultado.value;
    resultado.value = calcular();
  } else {
    resultado.value += valor;
  }
}

function calcular() {
  const valor1 = parseFloat(operando1);
  const valor2 = parseFloat(operando2);

  switch (operacao) {
    case '/':
      return valor1 / valor2;
    case '*':
      return valor1 * valor2;
    case '-':
      return valor1 - valor2;
    case '+':
      return valor1 + valor2;
    default:
      return '';
  }
}
