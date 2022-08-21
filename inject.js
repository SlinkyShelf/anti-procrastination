const cover = document.createElement("div")
cover.style.width = "100vw"
cover.style.height = "10000vh"
cover.style.zIndex = 1000000
cover.style.backgroundColor = "#656566"

cover.style.position = "absolute"
cover.style.top = "0px"
cover.style.left = "0px"

document.body.style.overflow = "hidden"


document.body.appendChild(cover)

console.log("Test")