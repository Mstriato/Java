function carregar(){ 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var atual = new Date()
    var agora = atual.getHours()
    msg.innerHTML = `Agora são ${agora} horas </br>`

    if (agora < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = 'rgb(194, 174, 149)'
    } else if (agora < 18){ 
        msg.innerHTML += 'Boa tarde!'
        img.src -'tarde.jpg'
        body.style.backgroundColor = 'rgb(172, 109, 68)'
    } else { 
        msg.innerHTML += 'Boa noite!'
        img.src ='noite.jpg'
        body.style.backgroundColor = 'rgb(34, 93, 121'
    }
}

