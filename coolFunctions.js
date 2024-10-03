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
<<<<<<< HEAD
    let inputValue = getInput(label).toLowerCase();
    return inputValue === 'true'
=======
    return getInput(label).toLowerCase() === 'true'
>>>>>>> f70229f48d4ad0b10feec01c4df7932d04039dfc
}

function addTextToPage(text) {
    const body = document.getElementsByTagName('body')[0]
    const newParagraph = document.createElement('p')
    newParagraph.append(text)
    body.append(newParagraph)
}

function clearPage() {
    const body = document.getElementsByTagName('body')[0]
    body.replaceChildren('')
}
