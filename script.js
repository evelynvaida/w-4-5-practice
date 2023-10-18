console.log("Hello world")

function domManipulation() {
    const rootElement = document.querySelector('#root')
    console.log(rootElement)
    rootElement.innerHTML = "This is done by dom manipulation "
}

window.addEventListener('load', domManipulation)

function logClick() {
    console.log('clicked')
}

window.addEventListener('click', logClick)

let tickCount = 0

function logTick() {
    console.log(`tick ${tickCount}`)
    tickCount++
}
window.setInterval(logTick, 1000)