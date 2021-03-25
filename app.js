// Mobile Menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".mobile-menu");
let mobileLogo = document.querySelector(".mobile-logo");

mobileLogo.addEventListener("click", function() {
	mobileLogo.classList.toggle("display-none");
	mobileMenu.classList.toggle("display-block")
	if (mobileMenu.classList.contains("display-block")) {
		mainMenu.classList.remove("hidden-menu")
	} else {
		mainMenu.classList.add("hidden-menu")
	}
})

mobileMenu.addEventListener("click", function() {
	mobileLogo.classList.toggle("display-none");
	mobileMenu.classList.toggle("display-block");
		if (mobileMenu.classList.contains("display-block")) {
		mainMenu.classList.remove("hidden-menu")
	} else {
		mainMenu.classList.add("hidden-menu")
	}
})