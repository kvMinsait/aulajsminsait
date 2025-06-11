let inUsuario   = document.getElementById('inUsuario');
let inSenha     = document.getElementById('inSenha');
let btnEntrar   = document.getElementById('btnEntrar');
let dialogLogin = document.getElementById('dialogLogin');
let btnFechar   = document.getElementById('btnFechar')

// variavel contendo usuários testes
// estrutura : "usuario" : "senha"
const usuarios = {
    "teste"   : "1234",
    "kayo"    : "4321",
    "minsait" : "minsait",
    "admin"   : "admin"
};

// quando clicar no botão de entrar
btnEntrar.addEventListener('click', function () {
    
    // se não tiver inserido usuario
    if (inUsuario.value === '') {
        window.alert("Campo de usuário é obrigatório");
        return;
    }

    // se não tiver inserido senha
    if (inSenha.value === '') {
        window.alert("Campo de senha é obrigatório");
        return;
    }
    
    // se o usuario existe na variavel de usuarios e a senha é a mesma guardada
    if (usuarios[inUsuario.value] && usuarios[inUsuario.value] === inSenha.value) {
        dialogLogin.showModal();
    } else {
        window.alert('Usuário ou senha incorretos.');
    }
})

btnFechar.addEventListener('click', function () {
    dialogLogin.close();
    window.location.href = '../../index.html';
})