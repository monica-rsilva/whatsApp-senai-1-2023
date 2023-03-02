'use strict'

import { contatos } from "./recursos/contatos.js"

const criarCard = (contatos) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `${contatos.image}`

    const name = document.createElement('name')
    name.classList.add('card__name')
    name.textContent = contatos.name

    const description = document.createElement('description')
    description.classList.add('card__description')
    description.textContent = contatos.description

    card.append(img, name, description)

    return card
}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const cards = contatos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarContatos()