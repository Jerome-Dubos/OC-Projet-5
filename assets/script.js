let bannerImage = document.querySelector(".banner-img")
let dotSelected = document.querySelector('.dot_selected')
let arrowLeft = document.querySelector('.arrow_left')
let arrowRight = document.querySelector('.arrow_right')
let imageActive = 0
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

function addDots() {
	let dots = `<span class="dot"></span>`
	for (let i = 0; i < slides.length; i++) {
		let dotsSlider = document.querySelector(".dots")
		dotsSlider.innerHTML += dots
		let divDot = document.querySelector(".dots .dot")
		divDot.classList.add("dot_selected")
	}
	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.addEventListener('click', () => {
			imageActive = i
			bannerImage.src = slides[imageActive].image
			addSelectedDot()
		})
	})
}

arrowLeft.addEventListener('click', () => {
	imageActive--
	if (imageActive < 0) {
		imageActive = slides.length - 1
	}
	bannerImage.src = slides[imageActive].image
	addSelectedDot()
})

arrowRight.addEventListener('click', () => {
	imageActive++
	if (imageActive >= slides.length) {
		imageActive = 0
	}
	bannerImage.src = slides[imageActive].image
	addSelectedDot()
})

function addSelectedDot() {
	document.querySelector('.dot_selected').classList.remove('dot_selected')
	document.querySelectorAll(".dot")[imageActive].classList.add("dot_selected")
}

addDots()