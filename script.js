document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Pegando as informações inseridas
    const nomeVisitante = document.getElementById('name').value.trim();
    const emailVisitante = document.getElementById('email').value.trim();
    const textoMensagem = document.getElementById('message').value.trim();
    const caixaResposta = document.getElementById('formResponse');

    // Exibe texto temporário de envio
    exibirMensagem('Enviando mensagem para o Bruno...', 'success');

    // Simula processamento da requisição em 1.5 segundos
    setTimeout(() => {
        const mensagemSucesso = `Valeu pelo contato, ${nomeVisitante}! O Bruno Lima recebeu sua mensagem e vai te responder no e-mail: ${emailVisitante}.`;
        
        exibirMensagem(mensagemSucesso, 'success');
        
        // Reseta os campos do formulário
        document.getElementById('contactForm').reset();
    }, 1500);
});

function exibirMensagem(texto, classe) {
    const caixaResposta = document.getElementById('formResponse');
    caixaResposta.innerText = texto;
    caixaResposta.className = ''; // Limpa classes
    caixaResposta.classList.add(classe);
}
