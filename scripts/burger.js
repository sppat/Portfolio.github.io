const burger = document.querySelector('.burger-menu');
const menuContainer = document.querySelector('.nav-container');
const listItems = document.querySelectorAll('.nav-container ul li');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    if (!burger.classList.contains('open')) {
        menuContainer.style.transform = 'translateX(-100%)';
    }
    else {
        menuContainer.style.transform = 'translateX(0)';
    }
});

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        burger.classList.toggle('open');
        menuContainer.style.transform = 'translateX(-100%)';
    });
});

