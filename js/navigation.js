import { navigation, registerButtons } from "../constants.js"

const navigationElement = document.getElementsByClassName('navigation__links')[0]
const registerButtonsWrapper = document.getElementsByClassName('register-buttons')[0]

navigation.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add('navigation__item')
    a.innerText = item
    li.append(a)
    navigationElement.append(li)
})

registerButtons.forEach(item => {
    const button = document.createElement('button')
    button.innerText = item
    registerButtonsWrapper.append(button)
})