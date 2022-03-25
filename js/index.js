document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.querySelector('#email');
    emailField.addEventListener('blur', (e) => {
        validarEmail(e.target);
    })
})


function validarEmail(input) {
    const email = input.value;
    let mensagem = '';
    let padraoEsperado = /@\S+.\S+/;
    if (!padraoEsperado.test(email)) {
        mensagem = 'Digite um email no formato: endereco@provedor.com';
    }
    input.setCustomValidity(mensagem)
}