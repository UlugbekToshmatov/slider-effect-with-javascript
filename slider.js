const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector(".slider");
const numOfImages = document.querySelectorAll(".image").length;
const bottom = document.querySelector(".bottom");
let index = 0;

rightArrow.addEventListener("click", () => {
    if (index === numOfImages - 1) {
      index = 0;
      moveSlide(index);
    } else {
      index++;
      moveSlide(index);
    }
    
    resetBGColor();
})

leftArrow.addEventListener("click", () => {
    if (index === 0) {
      index = numOfImages - 1;
      moveSlide(index);
    } else {
      index--;
      moveSlide(index);
    }

    resetBGColor();
})

for (let i = 0; i < numOfImages; i++) {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button";
    buttonDiv.addEventListener("click", () => goToImage(i));
    i === 0 && buttonDiv.classList.add("current-button");               // Setting default white background color to the first button
    bottom.append(buttonDiv);
}

const buttons = document.querySelectorAll(".button");                   // Querying 'buttons' after creation in the 'for' loop above

function moveSlide(slideNumber) {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;     // By default, transformation point is at 0 (px)
}

function goToImage(position) {
    moveSlide(position);
    index = position;
    resetBGColor();
}

function resetBGColor() {
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.style.backgroundColor = "white";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    })
}