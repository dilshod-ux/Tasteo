const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    window.location.href = 'menu.html'

})
let menuIcon = document.getElementById('menuIcon');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show'); // nav chiqadi/yopiladi
    if (nav.classList.contains('show')) {
        menuIcon.textContent = 'close'; // X belgisi chiqadi
    } else {
        menuIcon.textContent = 'menu'; // menu belgisi chiqadi
    }
});

