function addInputToPage(label, startingValue) {
    const body = document.getElementsByTagName('body')[0]
    const newDiv = document.createElement('div')
    const newTextField = document.createElement('input')
    newTextField.setAttribute('id', label)
    newTextField.setAttribute('value', startingValue)
    newDiv.append(label)
    newDiv.append(newTextField)
    body.append(newDiv)
}

function addButtonToPage(label, functionToCall) {
    const body = document.getElementsByTagName('body')[0]
    const newButton = document.createElement('button')
    newButton.append(label)
    newButton.addEventListener('click', functionToCall)
    body.append(newButton)
}

function getInput(label) {
    return document.getElementById(label).value
}

function getInputAsNumber(label) {
    return Number.parseFloat(getInput(label))
}

function getInputAsBoolean(label) {
    return getInput(label).toLowerCase === 'true'
}

function addTextToPage(text) {
    const body = document.getElementsByTagName('body')[0]
    const newParagraph = document.createElement('p')
    newParagraph.append(text)
    body.append(newParagraph)
}

