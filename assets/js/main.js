/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close")

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-sidebar")
	})
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-sidebar")
	})
}
/*=============== COMPARE TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
	tabContent = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target)

		tabContent.forEach(tabContents => {
			tabContents.classList.remove("compare_active")
		})
		target.classList.add("compare_active")

		tabs.forEach(tab => {
			tab.classList.remove("compare_active")
		})
		tab.classList.add("compare_active")
	})
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work_container", {
	selectors: {
		target: ".work_card",
	},
	animation: {
		duration: 300,
	},
})
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work_item")

function activeWork() {
	linkWork.forEach(l => l.classList.remove("active-work"))
	this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click", e => {
	if (e.target.classList.contains("work_button")) {
		togglePortfolioPopup()
		portfolioItemDetails(e.target.parentElement)
	}
})

function togglePortfolioPopup() {
	document.querySelector(".portfolio_popup").classList.toggle("open")
}
document
	.querySelector(".portfolio_popup-close")
	.addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
	document.querySelector(".pp_thumbnail img").src =
		portfolioItem.querySelector(".work_img").src
	document.querySelector(".portfolio_popup-subtitle span").innerHTML =
		portfolioItem.querySelector(".work_title").innerHTML
	document.querySelector(".portfolio_popup-body").innerHTML =
		portfolioItem.querySelector(".portfolio_item-details").innerHTML
}
