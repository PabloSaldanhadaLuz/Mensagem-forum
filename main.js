const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Lógica para cadastro (a ser implementada)
    alert('Cadastro realizado com sucesso!');
});

document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Lógica para login (a ser implementada)
    alert('Login realizado com sucesso!');
});