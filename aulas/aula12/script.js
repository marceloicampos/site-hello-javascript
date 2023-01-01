function votar() {
    let age = document.querySelector('input#age').value
    console.log(`Você tem ${age} anos.`)
    document.querySelector('div#ageMark').innerHTML = `Você tem ${age} anos de idade.`
    if (age < 16) {
        console.log('Menor de Idade - NÃO PODE VOTAR')
        document.querySelector('div#ageMessage').innerHTML = 'VOCÊ NÃO PODE VOTAR'
    } else if (age < 18 || age >= 65) {
        console.log('Menor de Idade - VOTO OPCIONAL')
        document.querySelector('div#ageMessage').innerHTML = 'SEU VOTO É OPCIONAL'
    } else {
        console.log('Maior de Idade - VOTO OBRIGATÓRIO')
        document.querySelector('div#ageMessage').innerHTML = 'SEU VOTO É OBRIGATÓRIO'
    }
}

// -------------------------------------------------------------------------

let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
document.querySelector('div#agora').innerHTML = `Agora são exatamente ${hora} horas.`
if (hora >= 8 && hora < 12) {
    console.log('BOM DIA')
    document.querySelector('div#agoraMensagem').innerHTML = 'BOM DIA'
} else if (hora >= 12 && hora < 18) {
    console.log('BOA TARDE')
    document.querySelector('div#agoraMensagem').innerHTML = 'BOA TARDE'
} else if (hora >= 18 && hora < 23) {
    console.log('BOA NOITE')
    document.querySelector('div#agoraMensagem').innerHTML = 'BOA NOITE'
} else if ((hora >= 23 && hora <= 24) || (hora >= 1 && hora <= 7)) {
    console.log('BOA MADRUGADA')
    document.querySelector('div#agoraMensagem').innerHTML = 'BOA MADRUGADA'
} else {
    console.log('ERRO: NÃO É UMA HORA VALIDA')
    document.querySelector('div#agoraMensagem').innerHTML = 'ERRO: NÃO É UMA HORA VALIDA'
}

// -------------------------------------------------------------------------

let now = new Date()
let weekDay = now.getDay()

switch (weekDay) {
    case 0:
        console.log('DOMINGO')
        document.querySelector('div#week').innerHTML = 'HOJE É DOMINGO'
        break
    case 1:
        console.log('SEGUNDA')
        document.querySelector('div#week').innerHTML = 'HOJE É SEGUNDA'
        break
    case 2:
        console.log('TERÇA')
        document.querySelector('div#week').innerHTML = 'HOJE É TERÇA'
        break
    case 3:
        console.log('QUARTA')
        document.querySelector('div#week').innerHTML = 'HOJE É QUARTA'
        break
    case 4:
        console.log('QUINTA')
        document.querySelector('div#week').innerHTML = 'HOJE É QUINTA'
        break
    case 5:
        console.log('SEXTA')
        document.querySelector('div#week').innerHTML = 'HOJE É SEXTA'
        break
    case 6:
        console.log('SÁBADO')
        document.querySelector('div#week').innerHTML = 'HOJE É SÁBADO'
        break
    default:
        console.log('DIA NÃO VÁLIDO')
        document.querySelector('div#week').innerHTML = 'DIA NÃO VÁLIDO'
        break
}
