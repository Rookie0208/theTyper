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

// *********************************************** ACCURACY WALA SAHI KAR
var sTime;
var timeClicked = 15;
// document.querySelectorAll(".timeEle").forEach(function(button) {
//     button.onclick = function() {
//       // Get the value of the button.
//       timeClicked = this.getAttribute('value');
//     // console.log(timeClicked);

//     };
//   });






// console.log(sTime);
let LeftTime, timeLeft;
sTime = timeClicked;
let charInd = 0;
let mistakes = 0;
let isTyping = false;
window.onload = () => {
    // console.log(timeClicked);


    randomParagraph();

    // timeLeft = sTime;
}

function getClickedTime() {
    clearInterval(LeftTime);
    var value;
    for (let i = 0; i < timeEle.length; i++) {
        timeEle[i].addEventListener('click', function () {
            // timeEle[i].innerText
            for (let j = 0; j < timeEle.length; j++) {
                timeEle[j].classList.remove('active');
            }
            timeEle[i].classList.add('active');
            value = this.getAttribute('value');
            timeClicked = parseInt(value);
            if (!isNaN(value) && value > 0) {
                sTime = timeClicked;
            }
            console.log(timeClicked);
        })
    }
    timeLeft = sTime;
    console.log("timeLeft: ", timeLeft);
    randomParagraph();
}

function randomParagraph() {
    clearInterval(LeftTime);
    timer.classList.add('hide');
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
var totalCorrectWords = 0;
var totalWords = 0;
let typedChar = '';
// let intervalId;
function initTyping() {
    // timeLeft = sTime;
    timer.classList.remove('hide');
    const characters = text.querySelectorAll('span');
    typedChar = inpField.value.split("")[charInd];
    // intervalId = setInterval(calculateWpm, 1000);
    // setTimeout(endTypingSession, sTime*1000);
    if (!isTyping) {
        LeftTime = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // console.log(characters[charInd].innerText)
    if (typedChar == null) {
        charInd--;
        totalWords--;
        if (characters[charInd].classList.contains("incorrect")) {
            mistakes--;
        }
        characters[charInd].classList.remove("correct", "incorrect");
    }
    else {
        if (characters[charInd].innerText == typedChar) {
            characters[charInd].classList.add("correct");
            totalCorrectWords++;
            totalWords++;
        } else {
            mistakenWords[m] = characters[charInd].innerText;
            // console.log(characters[charInd].innerText);
            // console.log(mistakenWords[m]);
            m++;
            mistakes++;
            totalWords++;
            totalCorrectWords--;
            characters[charInd].classList.add("incorrect");
        }
        charInd++;
    }
    characters.forEach(span => span.classList.remove("activeBar"));
    characters[charInd].classList.add("activeBar");


    let totalWrongWords = totalCorrectWords - mistakes;
    let userAccuracy = (((totalWords / totalCorrectWords) * 100) % 100).toFixed(2);
    // console.log(totalWords);
    // console.log(totalCorrectWords);
    // console.log(userAccuracy);
    mistake.innerText = mistakes;
    showTimer.innerText = `${timeClicked}s`;
    correct.innerText = totalCorrectWords;
    // wpm.innerText = speed;
    accuracy.innerText = `${userAccuracy}%`;
    // var ul = document.createElement('h4');
    for (let i = 0; i < mistakenWords.length; i++) {
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

function endTypingSession() {
    clearInterval(intervalId); // Stop calculating WPM
    calculateWpm();
}

function showSpeed(speed) {
    wpm.innerText = speed;
    console.log("speed : " + speed);
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
    // console.log("stime : ", sTime);
    // const characters = text.querySelectorAll('span');
    // charInd++;
    // characters.forEach(span => span.classList.remove("activeBar"));
    // charInd = 0;
    randomParagraph();
})

// function calculateWpm() {
//     const d = new Date();
//     const endTime = d.getSeconds();
//     console.log("endTime: "+endTime);
//     console.log("timeleft : "+timeLeft);
//     const totalMinutes = (endTime) / 60000;
//     const wordss = typedChar.trim().split(/\s+/);
//     const wordCount = wordss.length;
//     const speed = Math.round((wordCount / totalMinutes) * 60);
//     console.log("init speed : " +speed);
//     showSpeed(speed);
// }

let flag = 0;
if (flag == 0) {
    getClickedTime();
    console.log("clicked time :", timeClicked);
    flag = 1;
}
function initTimer() {

    // timeLeft = sTime;
    // console.log("time left  : ", timeLeft);
    timer.innerText = "";
    if (timeLeft > 0) {
        timer.innerText = timeLeft;
        timeLeft--;
    }
    else {
        clearInterval(LeftTime);
        if (timeLeft == 0) {
            // endTypingSession();
            disableKeyboardInput();
        }
        flag = 0;
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
