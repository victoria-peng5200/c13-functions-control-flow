

function techFlowChart(doesItMove, shouldItMove ) {
    addTextToPage('Does it move?')
    if (doesItMove) {
        addTextToPage('yes it moves')
        addTextToPage('Should it move?')
        if (shouldItMove) {
            addTextToPage('yes it should')
            addTextToPage('no problem!')    
        }
        else {
            addTextToPage('no it shouldnt')
            addTextToPage('apply duct tape')            
        }
    }
    else {
        addTextToPage('No it does not move')
        addTextToPage('Should it move?')
        if (shouldItMove) {
            addTextToPage('yes it should')
            addTextToPage('Apply WD40')    
        }
        else {
            addTextToPage('no it shouldnt')
            addTextToPage('no problem!')                    
        }
    }    
}

function techFlowChart2(doesItMove, shouldItMove) {
    if (doesItMove === shouldItMove) {
        addTextToPage('No problem!')
    }
    else if (shouldItMove) {
        addTextToPage('Apply WD40')
    }
    else {
        addTextToPage('Apply Duct tape')
    }
}

clearPage()
addInputToPage("Does it move", "true")
addInputToPage("Should it move", "true")
addButtonToPage("Fix it!", () => {
    let doesItMove = getInputAsBoolean("Does it move")
    let shouldItMove = getInputAsBoolean("Should it move")
    console.log(doesItMove, shouldItMove)
    techFlowChart(doesItMove, shouldItMove)
})
