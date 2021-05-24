const intro1 = 'Hi!';
const intro2 = 'Welcome to my portfolio.';
const intro3 = 'Feel free to explore...';
const underscore = document.querySelector('.underscore');
const paragraph = document.querySelector('.text');
const delay = 150;
const amount = 1;
(async function moveCursor() {
    for (let index = 0; index < intro1.length; index++) {
        await new Promise(resolve => {
            setTimeout(() => {
                underscore.style.transform = `translateX(${amount}px)`;
                paragraph.innerHTML += intro1[index];
                resolve();
            }, delay);
        });
    }
    paragraph.innerHTML += '<br>';
    underscore.style.transform = `translateX(${intro1.length}px)`;
    for (let index = 0; index < intro2.length; index++) {
        await new Promise(resolve => {
            setTimeout(() => {
                underscore.style.transform = `translateX(${amount}px)`;
                paragraph.innerHTML += intro2[index];
                resolve();
            }, delay);
        });
    }
    paragraph.innerHTML += '<br>';
    underscore.style.transform = `translateX(${intro2.length}px)`;
    for (let index = 0; index < intro3.length; index++) {
        await new Promise(resolve => {
            setTimeout(() => {
                underscore.style.transform = `translateX(${amount}px)`;
                paragraph.innerHTML += intro3[index];
                resolve();
            }, delay);
        });
    }
})();