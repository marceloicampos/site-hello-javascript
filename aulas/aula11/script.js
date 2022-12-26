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
    document.querySelector('#vel').innerHTML = `Sua velocidade é de ${velocidade} km/h`
    if (velocidade > 60) {
        document.querySelector('#res').innerHTML = 'Você ultrapassou a velocidade permitida. MULTADO!'
    } else {
        document.querySelector('#res').innerHTML = 'Dirija sempre usando cinto de segurança'
    }
}
