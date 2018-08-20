let botao = document.querySelector(".add");
let modal = document.querySelector(".modal");
let chamar = document.querySelector(".chamar");
let amigos = document.querySelectorAll(".amigos");
let botoesCalendario = document.querySelectorAll(".botao")
let calendario = document.querySelector(".calendario");
let meusDias = document.querySelector("#um");
let meusAmigos = document.querySelector(".semana")
let evento = document.querySelector("#evento")

botao.addEventListener('click', function(){
    modal.style.display = 'flex';
});

chamar.addEventListener('click', function(){
    evento.style.backgroundColor = "#e25f5f";
    modal.style.display = 'none';
    
});

for (botaoCalendario of botoesCalendario){
    botaoCalendario.onclick = trocaCalendario;
}

function trocaCalendario(){
    meusDias.style.backgroundColor = "#5fff9c";
    this.style.backgroundColor = '#ff0086';
}



