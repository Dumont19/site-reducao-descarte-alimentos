const quantidade = (document.getElementById('quantidadeDesperdicio'));
const resultadoElement = document.getElementById('resultado');
const calcularBtn = document.querySelector('#calcularBtn');
const limparBtn = document.querySelector('#limparBtn');

const calcular = () => {
  calcularBtn.addEventListener('click', () => { 
    if (isNaN(quantidade.value) || quantidade.value <= 0) {
        resultadoElement.textContent = "Por favor, insira uma quantidade válida.";
        resultadoElement.style.color = "red";

        console.log(quantidade)
    } else {
      const reducao = quantidade.value * 0.30;
      const mensagem = `Você pode reduzir até ${reducao.toFixed(2)} kg de desperdício de alimentos por semana se seguir algumas das nossas dicas!`;
    
      resultadoElement.textContent = mensagem;
      resultadoElement.style.color = "green";
    }
  });
}
calcular();

const limpar = () => {
  limparBtn.addEventListener('click', () => {
    document.getElementById('quantidadeDesperdicio').value = ''; 
    document.getElementById('resultado').textContent = ''; 
  });
}
limpar();
