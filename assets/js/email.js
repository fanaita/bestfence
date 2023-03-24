/*=============== CONTACT FORM ===============*/

const contactForm = document.getElementById("contact-form"),
	contactName = document.getElementById("contact-name"),
	contactEmail = document.getElementById("contact-email"),
	contactTel = document.getElementById("contact-tel"),
	contactMessage = document.getElementById("contact-message"),
	errorMessage = document.getElementById("error-message")

const sendEmail = e => {
	e.preventDefault()

	if (
		contactName.value === "" ||
		contactEmail.value === "" ||
		contactTel.value === "" ||
		contactMessage.value === ""
	) {
		errorMessage.textContent = "Write anything"
	} else {
		emailjs
			.sendForm(
				"service_8c7ue2s",
				"template_97in7qa",
				"#contact-form",
				"BcTyybeOHnvghSg6p"
			)
			.then(
				() => {
					errorMessage.classList.add("color-first")
					errorMessage.textContent = "Message send"

					setTimeout(() => {
						errorMessage.textContent = ""
					}, 5000)
				},
				error => {
					alert("Oops")
				}
			)
		contactName.value = ""
		contactEmail.value = ""
		contactTel.value = ""
		contactMessage.value = ""
	}
}

contactForm.addEventListener("submit", sendEmail)
