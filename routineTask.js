function techFlowChart(doesItMove, shouldItMove) {
  addTextToPage("Does it move?");
  if (doesItMove) {
    addTextToPage("Yes");
    addTextToPage("Should it move?");
    if (shouldItMove) {
      addTextToPage("Yes");
      addTextToPage("No problem");
    } else {
      addTextToPage("No");
      addTextToPage("Apply dust-tape");
    }
  } else {
    addTextToPage("No");
    addTextToPage("Should it move?");
    if (shouldItMove) {
      addTextToPage("Yes");
      addTextToPage("WD-40");
    } else {
      addTextToPage("No");
      addTextToPage("No problem");
    }
  }
}
// techFlowChart(true, false);

function patientFlowChart(doctorAvaliable, needFollowUp, needMedication) {
  addTextToPage("Doctor avaliable?");
  if (doctorAvaliable) {
    addTextToPage("Yes");
    addTextToPage("Assign patient to doctor.");
    if (needFollowUp) {
      addTextToPage("Yes");
      addTextToPage("Arrange follow up appointment.");
    } else {
      addTextToPage("No");
      addTextToPage("Need medication?");
      if (needMedication) {
        addTextToPage("Yes");
        addTextToPage("Give patient medication.");
      } else {
        addTextToPage("No");
        addTextToPage("Patient leaves.");
      }
    }
  } else {
    addTextToPage("No");
    addTextToPage("Wait for doctor to be avaliable.");
  }
}

// patientFlowChart(true, true, true);

addInputToPage("Doctor avaliable", "True");
addInputToPage("Need Follow Up", "false");
addInputToPage("Need Medication", "true");

addButtonToPage("Patient Flow Chart", () => {
//   debugger;
  const doctorAvaliable = getInputAsBoolean("Doctor avaliable");
  const needFollowUp = getInputAsBoolean("Need Follow Up");
  const needMedication = getInputAsBoolean("Need Medication");
  patientFlowChart(doctorAvaliable, needFollowUp, needMedication);
});

// patientFlowChart(true, true, true);
