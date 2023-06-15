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

let charInd = 0;
window.onload = () => {
    text.innerHTML = "";
    let randInd = Math.floor(Math.random() * paragraphs.length);
    (paragraphs[randInd].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        text.innerHTML += (spanTag);
    }));

    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("keydown", () => inpField.focus());
}
nextText.addEventListener('click', () => {
    text.innerHTML = "";
    let randInd = Math.floor(Math.random() * paragraphs.length);
    (paragraphs[randInd].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        text.innerHTML += (spanTag);
    }));

    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("keydown", () => inpField.focus());
})

function initTyping() {
    const characters = text.querySelectorAll('span');
    let typedChar = inpField.value.split("")[charInd];
    if (characters[charInd].innerText == typedChar) {
        characters[charInd].classList.add("correct");
    } else {
        characters[charInd].classList.add("incorrect");
    }
    charInd++;
    characters.forEach(span => span.classList.remove("activeBar"));
    characters[charInd].classList.add("activeBar");
    // console.log(charInd);

}

inpField.addEventListener('input', initTyping);
