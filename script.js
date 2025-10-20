const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});