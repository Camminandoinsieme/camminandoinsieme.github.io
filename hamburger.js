const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.fa-times');
const btnClose1 = document.querySelector('.close-1');
const btnClose2 = document.querySelector('.close-2');
const btnClose3 = document.querySelector('.close-3');
const btnClose4 = document.querySelector('.close-4');
const btnClose5 = document.querySelector('.close-5');
const btnClose6 = document.querySelector('.close-6');
const hamburgerMenu = document.querySelector('.hamburger-menu');



btnOpen.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
})
btnClose.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})
btnClose1.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})
btnClose2.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})
btnClose3.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})
btnClose4.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})