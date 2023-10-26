let numBtn = document.querySelectorAll('[data-num]')
let oprBtn = document.querySelectorAll('[data-opr]')
let res = document.querySelector('#ires')
let del = document.querySelector('[data-del]')
let clr = document.querySelector('[data-clr]')
let screen = document.querySelector('#iscreen')

del.addEventListener('click', function() {
    let currentText = screen.value
    if (currentText.length > 0) {
        screen.value = currentText.slice(0, -1)
    }
})

clr.addEventListener('click', function() {
    let screen = document.querySelector('#iscreen')
    screen.value = ''
})

let altBtn = document.querySelector('#pn')
altBtn.addEventListener('click', function() {
    let screen = document.querySelector('#iscreen')
    let currentValue = parseFloat(screen.value)
    if (!isNaN(currentValue)) {
        screen.value = -currentValue
    }
})

numBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        screen.value += button.textContent
    })
})

oprBtn.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let operacao = botao.textContent
        screen.value += operacao
    })
})

function adicionar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: Divisão por zero";
    }
}

res.addEventListener('click', function() {
    let textoVisor = screen.value

    if (/[^0-9\+\-\*\/\.]/.test(textoVisor)) {
        screen.value = "Error: Formato inválido"
        return
    }

    try {
        let resultado = eval(textoVisor)

        if (resultado === Infinity || isNaN(resultado)) {
            screen.value = "Erro: Divisão por zero ou formato inválido"
        } else {
            screen.value = resultado
        }
    } catch (error) {
        screen.value = "Erro: Formato inválido"
    }
})