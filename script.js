
const botoesProximo = document.querySelectorAll('.btn-proximo');


botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        
        const proximoPassoId = this.getAttribute('data-proximo');
        
    
        const passoAtual = document.querySelector('.passo.ativo');
        
        
        passoAtual.classList.remove('ativo');
        
      
        const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
        
      
        proximoPasso.classList.add('ativo');
    });
});
