import { films } from '../data/films.js'

const greeting = "Hello World"

let filmList = document.querySelector("#filmlist")

for (let i = 0; i < films.length; i++) {

    //let lastNum = getLastNumber(films[i].url)
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let posterFig = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')

    figCaption.textContent = foundFilm.title
    posterFig.appendChild(figImg)
    posterFig.appendChild(figCaption)

    filmList.appendChild(posterFig)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
    console.log(`filmNum is ${url.charAt(filmNum)}`)
}