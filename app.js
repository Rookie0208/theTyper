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
let wrongWords = document.querySelector('.wrongWords');
const t15 = document.getElementById('15');
const t25 = document.getElementById('25');
const t40 = document.getElementById('40');
const t60 = document.getElementById('60');
var timeEle = document.getElementsByClassName('timeEle');
var sTime = 15;
var timeClicked = 3;
// document.querySelectorAll(".timeEle").forEach(function(button) {
//     button.onclick = function() {
//       // Get the value of the button.
//       timeClicked = this.getAttribute('value');
//     // console.log(timeClicked);

//     };
//   });


for (let i = 0; i < timeEle.length; i++) {
    timeEle[i].addEventListener('click', function () {
        // timeEle[i].innerText
        for (let j = 0; j < timeEle.length; j++) {
            timeEle[j].classList.remove('active');
        }
        timeEle[i].classList.add('active');
        var value = this.getAttribute('value');
        // console.log(timeClicked);
        timeClicked = value;
    })
}

console.log(sTime);
sTime = timeClicked;
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
        if (span == " ") { spaceCount++; }
        let spanTag = `<span>${span}</span>`;
        text.innerHTML += (spanTag);
        // console.log("spaces :", spaceCount);
    }));
    // console.log("text : " +paragraphs[randInd]);

    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("keydown", () => inpField.focus());
}


var mistakenWords = [];
let m = 0;
function initTyping() {
    // timeLeft = sTime;
    timer.classList.remove('hide');
    const characters = text.querySelectorAll('span');
    let typedChar = inpField.value.split("")[charInd];
    if (!isTyping) {
        LeftTime = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // console.log(characters[charInd].innerText)
    if (typedChar == null) {
        charInd--;
        if (characters[charInd].classList.contains("incorrect")) {
           
            mistakes--;
        }
        characters[charInd].classList.remove("correct", "incorrect");
    }
    else {
        if (characters[charInd].innerText == typedChar) {
            characters[charInd].classList.add("correct");
        } else {
            mistakenWords[m] = characters[charInd].innerText;
            // console.log(characters[charInd].innerText);
            // console.log(mistakenWords[m]);
            m++;
            mistakes++;
            characters[charInd].classList.add("incorrect");
        }
        charInd++;
    }
    characters.forEach(span => span.classList.remove("activeBar"));
    characters[charInd].classList.add("activeBar");
    // console.log(charInd);
    // console.log(sTime);
    // console.log(LeftTime);

    mistake.innerText = mistakes;
    showTimer.innerText = `${timeClicked}s`;
    // var ul = document.createElement('h4');
    for(let i = 0; i < mistakenWords.length; i++) {
        var openBracket = document.createElement('span');
        openBracket.textContent = '[';

        var closeBracket = document.createElement('span');
        closeBracket.textContent = ']';

        var valueSpan = document.createElement('h6');
        valueSpan.textContent = mistakenWords.join(', ');
    }
    // wrongWords.appendChild(openBracket);
// wrongWords.appendChild(valueSpan);
// wrongWords.appendChild(closeBracket);

}
// console.log(mistakenWords);

// function generateRandomPara(randInd) {
//     text.innerHTML = "";
//     // let randInd = Math.floor(Math.random() * paragraphs.length);
//     text.innerHTML = paragraphs[randInd].split(' ').slice(0, 15).join(' ');
//     // console.log("text R: " +paragraphs[randInd]);
// }

// resting the whole window
restart.addEventListener('click', () => {
    charInd = 0;
    sTime = timeClicked;
    // const characters = text.querySelectorAll('span');
    // charInd++;
    // characters.forEach(span => span.classList.remove("activeBar"));
    // charInd = 0;
    randomParagraph();
})


function initTimer() {
    // timeLeft = sTime;
    timer.innerText = "";
    if (timeLeft > 0) {
        timer.innerText = timeLeft;
        timeLeft--;
    }
    else {
        clearInterval(LeftTime);
        if (timeLeft == 0) {
            disableKeyboardInput();
        }
        testPage.classList.remove('hide');
        testPage.classList.add('show');
    }
}

function disableKeyboardInput() {
    // Disable keyboard input by capturing keydown events
    document.addEventListener('keydown', preventDefault);
}
function enableKeyboardInput() {
    // Disable keyboard input by capturing keydown events
    document.removeEventListener('keydown', preventDefault);
    sTime = timeClicked;
    timeLeft = timeClicked;
    isTyping = false;
    mistakenWords = [];
    // console.log(timeLeft);
}

testPage.classList.remove('show');
testPage.classList.add('hide');

keyboard.addEventListener('click', () => {
    // inpField.removeEventListener('input', disableKeyboardInput);
    // inpField.addEventListener('input', enableKeyboardInput);
    enableKeyboardInput();
    testPage.classList.remove('show');
    testPage.classList.add('hide');
    // clearTimeout(timeLeft);
    timer.classList.add('hide');
    randomParagraph();
})


function preventDefault(event) {
    event.preventDefault();
}
// console.log('stime ' +sTime)
// console.log('timeclicked '+timeClicked)
// console.log('timeleft '+timeLeft)
inpField.addEventListener('input', initTyping);
nextText.addEventListener('click', randomParagraph)
