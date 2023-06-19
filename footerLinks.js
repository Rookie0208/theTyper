const contact = document.getElementById('contact');
const support = document.getElementById('support');

const modal = document.getElementById('modal-box');
const modalContent = document.getElementById('modal-content-box');

const modal2 = document.getElementById('modal-box2');
const modalContent2 = document.getElementById('modal-content-box2');
const testPage = document.getElementById('blurr-bg-modal');
const keyboard = document.querySelector('.fa-keyboard');

document.addEventListener('DOMContentLoaded', () => {
    contact.addEventListener('click', () => {
        modal.classList.add('show');
    });

    modal.addEventListener('click', (event) => {
        if(!modalContent.contains(event.target)) {
            modal.classList.remove('show');
        } 
    })



    // support.addEventListener('click', () => {
    //     modal2.classList.add('show');
    // });
    // modal2.addEventListener('click', (event) => {
    //     if(!modalContent2.contains(event.target)) {
    //         modal2.classList.remove('show');
    //     } 
    // })
})


