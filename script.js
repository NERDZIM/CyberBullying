const form = document.getElementById('denunciaForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const jogo = document.getElementById('jogo').value;
    const descricao = document.getElementById('descricao').value;

    // Aqui você implementaria a lógica para enviar os dados para um servidor ou realizar outra ação, como enviar um email
    console.log('Dados da denúncia:', nome, idade, jogo, descricao);

    // Exibir uma mensagem de sucesso (ajuste conforme necessário)
    alert('Denúncia enviada com sucesso! Nossa equipe entrará em contato.');
});

function toggleMenu() {
  const menuContent = document.getElementById('menu-content');
  menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
}


function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}
