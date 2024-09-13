const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let bannerImage = document.querySelector(".banner-img")
let bannerText = document.querySelector("#banner p")
let dotSelected = document.querySelector('.dot_selected')
let arrowLeft = document.querySelector('.arrow_left')
let arrowRight = document.querySelector('.arrow_right')
let imageActive = 0


arrowLeft.addEventListener('click', () => {
	changeCarousel(false)
})

arrowRight.addEventListener('click', () => {
	changeCarousel(true)
})

function changeCarousel (toRight) {
	if (toRight) {
		imageActive++
	}
	else {
		imageActive--
	}
	if (imageActive < 0) {
		imageActive = slides.length - 1
	}
	if (imageActive >= slides.length) {
		imageActive = 0
	}
	bannerImage.src = slides[imageActive].image
	replaceTextBanner()
	addSelectedDot()
}

function addDots() {
	let dots = `<span class="dot"></span>`
	for (let i = 0; i < slides.length; i++) {
		let dotsSlider = document.querySelector(".dots")
		dotsSlider.innerHTML += dots
		let spanDot = document.querySelector(".dots .dot")
		spanDot.classList.add("dot_selected")
	}
	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.addEventListener('click', () => {
			imageActive = i
			bannerImage.src = slides[imageActive].image
			addSelectedDot()
			replaceTextBanner()
		})
	})
}

function addSelectedDot() {
	document.querySelector('.dot_selected').classList.remove('dot_selected')
	document.querySelectorAll(".dot")[imageActive].classList.add("dot_selected")
}

function replaceTextBanner() {
	bannerText.innerHTML = slides[imageActive].tagLine
}

addDots()