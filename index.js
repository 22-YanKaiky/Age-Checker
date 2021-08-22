function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique e tente novamente")
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('img')

        if (fgen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.src = 'images/crianca-homem.jpg'
            } else if (idade < 21) {
                img.src = 'images/jovem-homem.jpg'
            } else if (idade < 50){
                img.src = 'images/adulto-homem.jpg'
            } else {
                img.src = 'images/idoso-homem.jpg'
            }
        } else if (fgen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.src = 'images/crianca-mulher.jpg'
            } else if (idade < 21) {
                img.src = 'images/jovem-mulher.jpg'
            } else if (idade < 50) {
                img.src = 'images/jovem-mulher.jpg'
            } else {
                img.src = 'images/idoso-mulher.jpg'
            }
        }
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
