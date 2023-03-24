/*=============== SCROLL SECTIONS ACTIVE LINK ==============*/

const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", navHighlighter)
function navHighlighter() {
	let scrollY = window.pageYOffset

	section.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute(id)

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav_menu a[href*=" + sectionId + "]")
				.classList.add("active-link")
		} else {
			document
				.querySelector(".nav_menu a[href*=" + sectionId + "]")
				.classList.remove("active-link")
		}
	})
}
