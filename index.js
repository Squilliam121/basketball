let stephcont = document.getElementById("stephcont")
let stephtxt = document.getElementById("stephtxt")

stephtxt.style.opacity = "0"

stephcont.addEventListener("mouseover", ()=>{
	stephtxt.style.opacity = "1"
})

stephcont.addEventListener("mouseout", ()=>{
	stephtxt.style.opacity = "0"
})