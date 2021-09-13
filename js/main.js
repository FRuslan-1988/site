
let anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (evt) {
        evt.preventDefault();

        let goto = anchor.getAttribute('href');

        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}