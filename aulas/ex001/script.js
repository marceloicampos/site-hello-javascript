let nome = 'marcelo'
console.log(nome)

function load() {
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var date = new Date()
    var hora = date.getHours()
    // var hora = 22
    if ((hora >= 0) & (hora < 12)) {
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#e2cd9f'
    } else if ((hora >= 12) & (hora <= 18)) {
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite`
        image.src = 'https://picsum.photos/200'
        document.body.style.background = '#515154'
    }
}
