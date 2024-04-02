/* Select All Elements */
const $ = document;
const hambergerMenu = $.querySelector(".hamberger-menu");
const mobileMenuWrapper = $.querySelector(".mobile-menu-wrapper");
const allLikeIcons = $.querySelectorAll(".place__like");
const scrollToTopBtn = $.querySelector(".scroll-to-top-btn");

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

/* Effect of Like on Place Cards */
allLikeIcons.forEach((likeIcon) => {
	likeIcon.addEventListener("click", (e) => {
		e.target.closest(".place__like").classList.toggle("place__like--active");
	});
});

/* Scroll To Top Button */
scrollToTopBtn.addEventListener("click", (e) => {
	window.scrollTo(0, 0);
});
