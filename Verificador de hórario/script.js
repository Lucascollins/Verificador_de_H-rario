function loading() {
    var msg = document.querySelector("div#msg")
    var p = document.querySelector('p')
    var img = document.querySelector("#image ")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 3) {
        //Boa Madrugada
        img.src = "Noite.jpg"
        msg.innerHTML = `Boa Madrugada </br> Agora são ${hora} horas.`
        document.body.style.background = 'black'
    } else if (hora > 3 && hora <= 12) {
        //Bom dia
        msg.innerHTML = `Bom Dia </br> Agora são ${hora} horas.`
        img.src = "manha.jpg"
        document.body.style.background = '#67cbe4'
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde
        msg.innerHTML = `Boa Tarde </br> Agora são ${hora} horas.`
        img.src = "tarde.jpg"
        document.body.style.background = '#e6cd44'
    } else {
        //Boa Noite
        msg.innerHTML = `Boa Noite </br> Agora são ${hora} horas.`
        img.src = "Noite.jpg"
        document.body.style.background = '#1f0230'
    }

}