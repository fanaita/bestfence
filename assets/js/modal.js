/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll(".services_modal")
modelBtns = document.querySelectorAll(".services_button")
modelCloses = document.querySelectorAll(".services_modal_close")

let modal = function (modalClick) {
	modalViews[modalClick].classList.add("active-modal")
}

modelBtns.forEach((modelBtn, i) => {
	modelBtn.addEventListener("click", () => {
		modal(i)
	})
})

modalCloses.forEach(modalClose => {
	modalClose.addEventListener("click", () => {
		modalViews.forEach(modalView => {
			modalView.classList.remove("active-modal")
		})
	})
})
