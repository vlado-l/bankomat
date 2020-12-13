const input = document.querySelector('input')
const button = document.querySelector('button')

const nominals = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
let zasobyKs = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
let poctyKs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function render () {
    $('tbody').html('')

    nominals.forEach((val, idx) => {
        $('tbody').append(
            $('<tr>')
                .append($('<td>', { text: (val / 100).toFixed(2) }))
                .append($('<td>', { text: poctyKs[idx] }))
        )
    })
}

function vydaj () {
    let suma = parseFloat(input.value, 10) * 100 || 0
    let povodnaSuma = suma
    poctyKs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let zaloha = [...zasobyKs]

    for (let i = 0; i < nominals.length; i++) {
        while (suma >= nominals[i]) {
            if (zasobyKs[i] > 0) {
                poctyKs[i]++
                zasobyKs[i]--
                suma -= nominals[i]
            } else {
                break
            }
        }
        if (suma === 0) break
    }

    if (suma === 0) {
        render()
        input.value = ''
    } else {
        input.value = ''
        zasobyKs = zaloha
        alert(`Nemám dostatok bankoviek\nna vydanie ${(povodnaSuma / 100).toFixed(2)} eur.\nMôžem vydať maximálne ${((povodnaSuma - suma) / 100).toFixed(2)} eur.`)
    }
}

render()
input.focus()
button.addEventListener('click', vydaj)

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
        vydaj()
    }
})