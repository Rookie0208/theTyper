// const opt = document.getElementById("15");
//     const time = document.getElementById("time");
//     const word = document.getElementById("word");
//     const colorBtn = document.querySelectorAll("h3");

//     colorBtn.forEach((ele) => {
//         ele.addEventListener("click", (t) => {
//             ele.classList.add('active');
//             // ele2.classList.remove('active');
//         // opt.classList.remove('active');
//     })
//     })

const newText = document.querySelector('.typing-text p');
const inpField = document.querySelector('.input-field');
const nextText = document.getElementById('next-text');
const text = document.getElementById('content-text');
const hText = document.getElementById('hidden-text');
const restart = document.getElementById('restart');
const timer = document.getElementById('time-interval');
let showTimer = document.querySelector('.show-time');
let mistake = document.querySelector('.mistakes');

let sTime = 15;
let LeftTime, 
timeLeft = sTime;
let charInd = 0;
let mistakes = 0;
let isTyping = false;
window.onload = () => {
    text.innerHTML = "";
    let randInd = Math.floor(Math.random() * paragraphs.length);
    // showPara();
    (paragraphs[randInd].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        text.innerHTML += (spanTag);
        // console.log("text : " +spanTag);
    }));

    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("keydown", () => inpField.focus());
}


function randomParagraph() {
    charInd = 0;
    inpField.value = "";
    text.innerHTML = "";
    let spaceCount = 0;
    let randInd = Math.floor(Math.random() * paragraphs.length);
    // generateRandomPara(randInd);
    (paragraphs[randInd].split("").forEach(span => {
        if(span == " ") {spaceCount++;}
        let spanTag = `<span>${span}</span>`;
        text.innerHTML += (spanTag);
        // console.log("spaces :", spaceCount);
    }));
    // console.log("text : " +paragraphs[randInd]);
    
    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("keydown", () => inpField.focus());
}



function initTyping() {
    timer.classList.remove('hide');
    const characters = text.querySelectorAll('span');
    let typedChar = inpField.value.split("")[charInd];
    if(!isTyping) {
        LeftTime = setInterval(initTimer, 1000);
        isTyping = true;
    }
    
    if(typedChar == null) {
        charInd--;
        if(characters[charInd].classList.contains("incorrect")) {
            mistakes--;
        }
        characters[charInd].classList.remove("correct", "incorrect");
    }
    else {
    if (characters[charInd].innerText == typedChar) {
        characters[charInd].classList.add("correct");
    } else {
        mistakes++;
        characters[charInd].classList.add("incorrect");
    }
    charInd++;
}
    characters.forEach(span => span.classList.remove("activeBar"));
    characters[charInd].classList.add("activeBar");
    // console.log(charInd);
    // console.log(mistakes);
    mistake.innerText = mistakes;
    showTimer.innerText = `${sTime}s`;

}


// function generateRandomPara(randInd) {
//     text.innerHTML = "";
//     // let randInd = Math.floor(Math.random() * paragraphs.length);
//     text.innerHTML = paragraphs[randInd].split(' ').slice(0, 15).join(' ');
//     // console.log("text R: " +paragraphs[randInd]);
// }

// resting the whole window
restart.addEventListener('click', () => {
    charInd = 0;
    sTime = 0;
    // const characters = text.querySelectorAll('span');
    // charInd++;
    // characters.forEach(span => span.classList.remove("activeBar"));
    // charInd = 0;
    randomParagraph();
})


function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timer.innerText = timeLeft;
    }
    else {
        clearInterval(LeftTime);
            testPage.classList.remove('hide');
            testPage.classList.add('show');
    }
}
testPage.classList.remove('show');
testPage.classList.add('hide');
// setTimeout(() => {
//     testPage.classList.remove('hide');
//     testPage.classList.add('show');
// }, 3000);

keyboard.addEventListener('click', () => {
    testPage.classList.remove('show');
    testPage.classList.add('hide');
    clearTimeout(sTime);
    timer.classList.add('hide');
    randomParagraph();
})

inpField.addEventListener('input', initTyping);
nextText.addEventListener('click',randomParagraph)
