let botao = document.querySelector(".add");
let modal = document.querySelector(".modal");
let chamar = document.querySelector(".chamar");
let amigos = document.querySelectorAll(".amigos");
let botoesCalendario = document.querySelectorAll(".botao")
let calendario = document.querySelector(".calendario");

botao.addEventListener('click', function(){
    modal.style.display = 'flex';
});

chamar.addEventListener('click', function(){
    modal.style.display = 'none';
});

for (botaoCalendario of botoesCalendario){
    botaoCalendario.onclick = trocaCalendario;
}

function trocaCalendario(){
    calendario.style.backgroundColor = 'red';
    this.style.backgroundColor = '#ff0086';
}



