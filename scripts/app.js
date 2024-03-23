/* Select All Elements */
const $ = document;
const hambergerMenu = $.querySelector(".hamberger-menu");
const mobileMenuWrapper = $.querySelector(".mobile-menu-wrapper");

/* Flags Variable */
let mobileMenuIsOpen = false;

/* Hide & Show Mobile Menu */
hambergerMenu.addEventListener("click", function () {
	if (mobileMenuIsOpen) {
		hambergerMenu.classList.remove("hamberger-menu__open");
		mobileMenuWrapper.classList.remove("mobile-menu-wrapper--open");
		mobileMenuIsOpen = false;
	} else {
		hambergerMenu.classList.add("hamberger-menu__open");
		mobileMenuWrapper.classList.add("mobile-menu-wrapper--open");
		mobileMenuIsOpen = true;
	}
});
