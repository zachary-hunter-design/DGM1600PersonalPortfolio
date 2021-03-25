import { films } from '../data/films.js'

const greeting = "Hello World"

let filmList = document.querySelector("#filmlist")

for (let i = 0; i < films.length; i++) {

    //let lastNum = getLastNumber(films[i].url)
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let filmItem = document.createElement('li')
    filmItem.textContent = films[i].title
    filmList.appendChild(filmItem)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
    console.log(`filmNum is ${url.charAt(filmNum)}`)
}