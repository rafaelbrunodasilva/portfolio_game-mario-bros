const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-game');
const menu = document.querySelector('div.menu');
const counter = document.querySelector('span.counter');


const jump = () => {
    mario.classList.add("jump-mario");
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

let points = 0;

const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    points = points + 1;
    //console.log(points);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./Images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        clearInterval(loopGame);

        menu.style.animation = "menu-animation 1000ms";
        menu.style.opacity = "1";
        counter.innerHTML = points;
    }

});

document.addEventListener("keydown", jump);