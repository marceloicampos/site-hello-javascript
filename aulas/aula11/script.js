let vel = 60
console.log('Console OK')

if (vel > 60) {
    console.log(`A velocidade do seu carro é ${vel} km/h`)
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
} else {
    console.log(`A velocidade do seu carro é ${vel} km/h`)
    console.log('Dirija sempre usando cinto de segurança')
}

function verificar() {
    let velocidade = Number(document.querySelector('#txtVel').value)
    console.log(velocidade)
    if (velocidade > 60) {
        document.querySelector('#res').innerHTML = '<p>Você ultrapassou a velocidade permitida. MULTADO!</p>'
    } else {
        document.querySelector('#res').innerHTML = '<p>Dirija sempre usando cinto de segurança</p>'
    }
}
