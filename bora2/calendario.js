let botao = document.querySelector(".add");
let modal = document.querySelectorAll(".modal");
let chamar = document.querySelectorAll(".chamar");



botao.addEventListener('click', function(){
    modal.style.display = 'flex';
    modal.classList.toggle(".modalON")
});