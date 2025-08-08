let jamescont = document.getElementById("jamescont")
let jamestxt = document.getElementById("jamestxt")

jamestxt.style.opacity = "0"

jamescont.addEventListener("mouseover", ()=>{
	jamestxt.style.opacity = "1"
})

jamescont.addEventListener("mouseout", ()=>{
	jamestxt.style.opacity = "0"
})