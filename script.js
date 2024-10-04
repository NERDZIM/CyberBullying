// script.js
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Mudar para Tema Claro';
  } else {
    toggleButton.textContent = 'Mudar para Tema Escuro';
  }
});
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
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'   

});

// Definindo um modelo para representar uma tabela
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING
});

// Criando um usuário
User.create({
  username: 'johnDoe',
  email: 'johndoe@example.com'
})
.then(user => {
  console.log(user.toJSON());
})
.catch(err => {
  console.error(err);
});
