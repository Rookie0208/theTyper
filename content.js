const paragraphs = [
    "A slip chart is a very alternative favored by some project managers who believe it provides a more striking visual indication of those activities that are not progressing to schedule-the more the slip line bends, the greater variation from the plan. Additional slip lines are added at intervals and, as they built up, the project manager will gain an idea to whether the project is improving or not. A very jagged line indicates a need for rescheduling.",

    "Calculating cost is straightforward where organisation has standard cost figures for staff and other resources.Staff costs includes not just salary, but also social security contributions by the employer, holiday pay etc. Timesheets are often used to record actual hours spent on each project by an individual.",

    "All trademarks are trademarks of their respective owners. Rather than put a trademark symbol after every occurrence of a trademarked name, we use names in an editorial fashion only, and to the benefit of the trademark owner, with no intention of infringement of the trademark. Where such designations appear in this book, they have been printed with initial caps.",

    "The C language shook the computer world. Its impact should not be underestimated, because it fundamentally changed the way programming was approached and thought about. The creation of C was a direct result of the need for a structured, efficient, high-level language that could replace assembly code when creating systems programs.",

    "A graph is bipartite if its nodes can be colored using two colors so that there are no adjacent nodes with the same color. It is surprisingly easy to check if a graph is bipartite using graph traversal algorithms. The idea is to color the starting node blue, all its neighbors red, all their neighbors blue, and so on. If at some point of the search we notice that two adjacent nodes have the same color, this means that the graph is not bipartite.",

    "The cat sat on the mat. A red car sped past the old house. The sun set behind the mountains, casting a golden glow.",

    "The rain poured relentlessly, drenching everything in its path. The wind howled through the trees, creating an eerie symphony of nature.",
    "A young girl skipped happily along the sandy beach, collecting seashells in her pail. The waves crashed against the shore, creating a soothing rhythm.",

    "The tall oak tree stood majestically in the middle of the meadow, its branches reaching towards the sky. Birds chirped happily from their perches.",

    " The smell of freshly baked cookies wafted through the air, making everyone's mouths water. Laughter filled the room as friends gathered around the table.",

    "The gentle breeze rustled the leaves, creating a calming melody. Flowers bloomed in vibrant colors, painting the landscape with their beauty.",

    "The city streets buzzed with activity as people hurried to their destinations. Car horns honked in the distance, adding to the urban symphony.",

    "The old bookstore was filled with the scent of aged paper and wisdom. Dusty shelves held stories waiting to be discovered by eager readers.",

    "The first rays of dawn painted the sky in hues of pink and orange, signaling the start of a new day. Nature awakened with a chorus of birdsong.",

    "The distant sound of waves crashing against the cliffs echoed in the quiet coastal town. Seagulls soared overhead, searching for their next meal."
]

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