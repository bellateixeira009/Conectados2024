function carregar() {
    var msg = window.document.getElementById('msg')
    var img = img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'pexels-simon73-1266810.jpg'
        document.body.style.background = '#ffacac'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'pexels-goumbik-296234.jpg'
        document.body.style.background = '#acd0ff'
    } else {
        //boa noite
        img.src = 'pexels-mlkbnl-10554403.jpg'
        document.body.style.background = '#bbacff'
    }
}