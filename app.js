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
const timer = document.getElementById('timer');

let sTime = 0;
let charInd = 0;
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
    const characters = text.querySelectorAll('span');
    let typedChar = inpField.value.split("")[charInd];
    if(typedChar == null) {
        charInd--;
        characters[charInd].classList.remove("correct", "incorrect");
    }
    else {
    if (characters[charInd].innerText == typedChar) {
        characters[charInd].classList.add("correct");
    } else {
        characters[charInd].classList.add("incorrect");
    }
    charInd++;
}
    characters.forEach(span => span.classList.remove("activeBar"));
    characters[charInd].classList.add("activeBar");
    // console.log(charInd);
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
inpField.addEventListener('input', initTyping);
nextText.addEventListener('click',randomParagraph)
