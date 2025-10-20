const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});


const cartButtonMinus = document.getElementById('cart-button-minus');
const cartButtonPlus = document.getElementById('cart-button-plus');
const cartCount = document.getElementById('cart-count');

cartButtonMinus.addEventListener('click', () => {
        cartButtonPlus.disabled = false;
        cartCount.textContent--;
    if (cartCount.textContent <= 0) {
        cartCount.textContent = 0;
        cartButtonMinus.disabled = true;
    } else {
        cartButtonMinus.disabled = false;
    }
});

cartButtonPlus.addEventListener('click', () => {
    cartButtonMinus.disabled = false;
    cartCount.textContent++;
    if (cartCount.textContent > 10) {
        cartCount.textContent = 10;
        cartButtonPlus.disabled = true;
    } else {
        cartButtonPlus.disabled = false;
    }
});


const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

function animate() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    follower.style.transform = `translate(${followerX-40}px, ${followerY-40}px)`;

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - cursor.offsetWidth / 2;
    mouseY = e.clientY - cursor.offsetHeight / 2;
    console.log("mouseX", mouseX);
    console.log("mouseY", mouseY);
});

animate();