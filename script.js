const heartsContainer = document.getElementById("hearts-container")

function createHeart(){

const heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML = "💗"

heart.style.left = Math.random() * 100 + "vw"

heart.style.fontSize = Math.random() * 20 + 15 + "px"

heart.style.animationDuration = Math.random() * 3 + 4 + "s"

heartsContainer.appendChild(heart)

setTimeout(() => {
heart.remove()
},7000)

}

setInterval(createHeart,300)
