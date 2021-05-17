let modalWindow = document.querySelector(".modal");
let cross = document.querySelector(".cross");
let blogDescription = document.querySelectorAll(".blog-description");
let blogBtn = document.querySelectorAll(".blog-btn");
let body = document.querySelector("body")

for (let i=0; i < blogBtn.length; i++) {
    blogBtn[i].addEventListener("click", function(){
        modalWindow.classList.add("dis-block")
        body.classList.add("bgc-dark-js")
    })
}
for (let i=0; i < blogDescription.length; i++) {
    blogDescription[i].addEventListener("click", function(){
        modalWindow.classList.add("dis-block")
        body.classList.add("bgc-dark-js")
    })
}

cross.addEventListener("click", function(){
    modalWindow.classList.remove("dis-block")
    body.classList.remove("bgc-dark-js")
})
