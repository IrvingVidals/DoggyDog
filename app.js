const url = "https://api.thedogapi.com/v1/images/search"
fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    const img = document.querySelector("img")
    img.src = data[0].url

})

const button = document.querySelector("button")

button.addEventListener("click",()=> window.location.reload())