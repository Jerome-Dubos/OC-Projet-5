const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', () => {
	console.log("Bravo ca marche a gauche")
})

let arrowRight = document.querySelector('.arrow_right')
arrowRight.addEventListener('click', () => {
	console.log('Bravo ca marche a droite aussi')
})

let dots = `<div class="dot"></div>`

for (let i = 0; i < slides.length; i++) {
	let dotsSlider = document.querySelector(".dots")
	dotsSlider.innerHTML += dots
	let divDot = document.querySelector(".dots .dot")
	divDot.classList.add("dot_selected")
}