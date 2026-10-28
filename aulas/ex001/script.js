let meuNome = 'marcelo'
console.log(meuNome)

import { saudacao } from './test.js'

function olaMarcelo() {
    alert(saudacao('Oi eu sou o Marcelo'))
}

window.load = load
window.mostrarMensagem = mostrarMensagem
window.senhaDigitada = senhaDigitada
window.olaMarcelo = olaMarcelo

const botao = document.getElementById('adicionar')
const entrada = document.getElementById('entrada')
const lista = document.getElementById('lista')

botao.addEventListener('click', function () {
    if (entrada.value.trim() !== '') {
        const item = document.createElement('li')
        item.textContent = entrada.value
        lista.appendChild(item)
        entrada.value = '' // limpa o campo após adicionar
    }
})

function load() {
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var date = new Date()
    var hora = date.getHours()
    // var hora = 22
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#515154'
    }
}

function mostrarMensagem() {
    const mensagem = 'Você clicou no botão'
    alert(mensagem)
}

function senhaDigitada() {
    let senha
    do {
        senha = prompt('Digite sua senha:')
    } while (senha !== '1234')

    alert('Acesso permitido!')
}
