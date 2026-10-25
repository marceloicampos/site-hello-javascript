let dia = 'segunda'

switch (dia) {
    case 'segunda':
        console.log('Início da semana')
        break
    case 'sexta':
    case 'sabado':
    case 'domingo':
        console.log('Sextou!')
        break
    default:
        console.log('Dia comum')
}

for (let i = 1; i <= 5; i++) {
    console.log('Produto: ' + i)
}

let continuar = true
let tentativas = 1

while (continuar) {
    console.log('Tentativa número ' + tentativas)
    tentativas++
    if (tentativas === 4) {
        continuar = false // para após 3 tentativas
    }
}

export function saudacao(nome) {
    return `${nome}!`
}
