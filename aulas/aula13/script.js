var nome = 'marcelo'
console.log(nome)
console.log(nome)
console.log(nome)
console.log(nome)
console.log(nome)

console.log('---')
// enquanto teste == true >>> FAÇA
function nomeWhile(params) {
    n = 1
    while (n < 6) {
        console.log(`${params} ${n}`)
        n++
    }
}

nomeWhile('marcelo')

console.log('---')
// FAÇA >>> enquanto teste == true
function nomeDoWhile(name) {
    m = 1
    do {
        console.log(`${name} ${m}`)
        m++
    } while (m < 6)
}

nomeDoWhile('campos')
