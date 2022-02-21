let contador = document.getElementById('contador')
let decrementar = document.getElementById('decrementar')
let reset = document.getElementById('reset')
let incrementar = document.getElementById('incrementar')


let counter = 0

mostrarContador = () => {
    contador.textContent = counter

}

agregarColor = () => {

    if (counter > 0) {
        contador.classList.remove('negativo')
        contador.classList.add('positivo')
    }
    else if (counter < 0) {
        contador.classList.remove('positivo')
        contador.classList.add('negativo')
    }
    else {
        contador.classList.remove('positivo')
        contador.classList.remove('negativo')

    }
    mostrarContador()
}

decrementar.onclick = () => {
    counter--
    agregarColor()
}

incrementar.onclick = () => {
    counter++
    agregarColor()
}

reset.onclick = () => {
    counter = 0
    agregarColor()
}








