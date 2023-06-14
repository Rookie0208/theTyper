const opt = document.getElementById("15");
    const time = document.getElementById("time");
    const word = document.getElementById("word");
    const colorBtn = document.querySelectorAll("h3");

    colorBtn.forEach((ele) => {
        ele.addEventListener("click", (t) => {
            ele.classList.add('active');
            // ele2.classList.remove('active');
        // opt.classList.remove('active');
    })
    })