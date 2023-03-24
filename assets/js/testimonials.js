/*=============== SWIPER TESTIMONIAL ===============*/

let swiper = new Swiper(".testimonials_container", {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 48,
		},
	},
})
