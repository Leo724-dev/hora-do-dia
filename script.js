const mensagem = document.querySelector(".mensagem");
const imagem = document.querySelector("#imagem");
const titulo = document.querySelector("h1");
const rodape = document.querySelector(".rodape");

function horarioDia(){
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    
    if(hora < 6){
        mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}`;

        imagem.src = "img/madrugada.jpg";

        document.body.style.backgroundColor = "#C5B9A5";

        titulo.style.color = "#3E3A32"
        rodape.style.color = "#6D6558";
    }else if(hora < 12){
        mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}`;

        imagem.src = "img/manha.jpg";

        document.body.style.backgroundColor = "#A3D977";

        titulo.style.color = "#6a9639"
        rodape.style.color = "#3D522B";
    }else if(hora < 18){
         mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}`;

        imagem.src = "img/tarde.jpg";

        document.body.style.backgroundColor = "#D98345";

        titulo.style.color = "#2B1605"
        rodape.style.color = "#5E300B";
    }else{
        mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}`;

        imagem.src = "img/noite.jpg";

        document.body.style.backgroundColor = "#1A242B";

        titulo.style.color = "#E0E6ED"
        rodape.style.color = "#8A9FB1";
    }
}

window.addEventListener("load", horarioDia);