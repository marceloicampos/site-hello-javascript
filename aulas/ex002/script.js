let nome = 'marcelo'
console.log(nome)

function check() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (fano.length == 0 || fano > ano) {
        alert('Verifique o Ano Digitado')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'image')
        if (fsex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/bebe-mas-p.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/jovem-mas-p.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/adulto-mas-p.png')
            } else {
                img.setAttribute('src', './images/idoso-mas-p.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/bebe-fem-p.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/jovem-fem-p.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/adulto-fem-p.png')
            } else {
                img.setAttribute('src', './images/idoso-fem-p.png')
            }
        }
        res.innerHTML = `Você é do Gênero ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}
