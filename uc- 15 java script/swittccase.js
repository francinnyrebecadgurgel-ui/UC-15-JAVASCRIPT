const estadoInput = document.querySelector('#estado');
const btnCalcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

btnCalcular.addEventListener('click', () => {
  const estado = (estadoInput.value || '').trim().toUpperCase();
  let frete = 0;
  let regiao = '';
  let prazo = '';

  switch (estado) {
    case 'SP':
    case 'RJ':
    case 'MG':
    case 'ES':
      regiao = 'Sudeste';
      frete = 25;
      prazo = '3 a 5 dias úteis';
      break;

    case 'PR':
    case 'SC':
    case 'RS':
      regiao = 'Sul';
      frete = 30;
      prazo = '4 a 6 dias úteis';
      break;

    case 'GO':
    case 'MT':
    case 'MS':
    case 'DF':
      regiao = 'Centro-Oeste';
      frete = 35;
      prazo = '5 a 7 dias úteis';
      break;

    case 'AM':
    case 'PA':
    case 'RO':
    case 'AC':
    case 'TO':
    case 'AP':
      regiao = 'Norte';
      frete = 40;
      prazo = '6 a 8 dias úteis';
      break;

    case 'AL':
    case 'BA':
    case 'CE':
    case 'MA':
    case 'PB':
    case 'PE':
    case 'PI':
    case 'RN':
    case 'SE':
      regiao = 'Nordeste';
      frete = 32;
      prazo = '5 a 7 dias úteis';
      break;

    default:
      resultado.textContent = 'Estado inválido. Use uma sigla como SP, RJ, RS ou AM.';
      return;
  }

  resultado.innerHTML = `
    Estado: ${estado}<br>
    Região: ${regiao}<br>
    Frete: R$ ${frete.toFixed(2)}<br>
    Prazo: ${prazo}
  `;
});

