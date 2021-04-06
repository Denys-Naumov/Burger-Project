let modalWindow = document.querySelector(".modal");
let cross = document.querySelector(".cross");
let blogDescription = document.querySelectorAll(".blog-description");

console.log(modalWindow);
console.log(cross);
console.log(blogDescription);


for (let i=0; i < blogDescription.length; i++) {
    blogDescription[i].addEventListener("click", function(){
        modalWindow.classList.add("dis-block")
    })
}

cross.addEventListener("click", function(){
    modalWindow.classList.remove("dis-block")
})
