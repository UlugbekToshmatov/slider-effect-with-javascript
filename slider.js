const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');
let lastPosition = 0;
let len = images.length;

for (let i = 0; i < len; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBG = () => {
    buttons.forEach(button =>{
        button.style.backgroundColor = "transparent";
    })
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBG()
        slider.style.transform = `translateX(-${i * 800}px)`;
        button.style.backgroundColor = "white";
        lastPosition = i * 800;
    });
});

const getNext = () => {
    slider.style.transform = `translateX(-${lastPosition + 800}px)`;
    lastPosition += 800;
};

const getFirst = () => {
    lastPosition = 0;
    slider.style.transform = `translateX(0px)`;
};

const getPrev = () => {
    slider.style.transform = `translateX(-${lastPosition - 800}px)`;
    lastPosition -= 800;
};

const getLast = () => {
    lastPosition = 2400;
    slider.style.transform = `translateX(-${lastPosition}px)`;
};

const setButtonColor = () => {
    resetBG();
    buttons[lastPosition / 800].style.backgroundColor = "white";
};

right.addEventListener('click', () => {
    (lastPosition < (len - 1) * 800)? getNext(): getFirst();
    setButtonColor();
});

left.addEventListener('click', () => {
    lastPosition > 0? getPrev(): getLast();
    setButtonColor();
});
