const contact = document.getElementById('contact');
const modal = document.getElementById('modal-box');
const modalContent = document.getElementById('modal-content-box');

document.addEventListener('DOMContentLoaded', () => {
    contact.addEventListener('click', () => {
        modal.classList.add('show');
    });

    modal.addEventListener('click', (event) => {
        if(!modalContent.contains(event.target)) {
            modal.classList.remove('show');
        }
        
    })

})
