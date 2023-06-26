

// const word15 = document.getElementById('15');
// const word25 = document.getElementById('25');
// const nextText = document.getElementById('next-text');

let check = 0;

// nextText.onclick = () => {
//     // if(check == 0) {
//     //     text.innerHTML = paragraphs[Math.floor(Math.random() * paragraphs.length)];
//     // }
//     charInd = 0;
//     inpField.value = "";
//     randomParagraph();
// }

// word15.addEventListener('click', () => {
//     charInd = 0;
//     let count = 0;
//     if (check == 25 || check == 0) {
//         text.innerHTML = "";
//         let randInd = Math.floor(Math.random() * paragraphs.length);
//         let newParagraph = paragraphs[randInd];
//         paragraphs[randInd].split("").forEach(span => {
//             if (count <= 15) {
//                 let spanTag = `<span>${span}</span>`;
//                 text.innerHTML += (spanTag);
//                 if (span === ' ') {
//                     count++;
//                 }
//             }
//         });
//         // text.innerHTML = newParagraph.split(" ").slice(0,15).join(' ');
//         // console.log(newParagraph);
//     }
//     check = 15;
// })
// word25.addEventListener('click', () => {
//     charInd = 0;
//     inpField.value = "";
//     if (check == 0 || check == 15) {
//         text.innerHTML = paragraphs[Math.floor(Math.random() * paragraphs.length)].split(' ').slice(0, 25).join(' ');
//     }
//     check = 25;
// })

// loadPara();