function nameForAge(age) {
    // Check if the input is not a number or is outside the valid range
    if (isNaN(age)) {
        return 'please enter a number';
    }
    if (age <= 0 || age >= 110) {
        return 'please enter a number >0 and <110';
    }

    // Determine the age category
    if (age < 2) {
        return 'baby';
    } else if (age < 12) {
        return 'child';
    } else if (age < 20) {
        return 'teenager';
    } else if (age < 30) {
        return 'twenty something';
    } else if (age < 40) {
        return 'thirty something';
    } else {
        return 'almost grown up';
    }
}

// Add page elements and handle button click
addTextToPage('Age-name-o-matic!');
addInputToPage('Age', 7);
addButtonToPage('Get name for age', () => {
    const age = getInputAsNumber('Age');
    console.log(age);
    const ageName = nameForAge(age);
    
    // Display error message if input is invalid
    if (ageName === 'please enter a number') {
        addTextToPage('Error, Please enter a number');
    } else if (ageName === 'please enter a number >0 and <110') {
        addTextToPage('Error, Please enter a number >0 and <110');
    } else {
        addTextToPage('Name for age ' + age + ' is ' + ageName);
    }
});

// patientFlowChart(true, false, true);
// addButtonToPage("Patient Flow Chart", () => {
//     const doctorAvaliable = getInputAsBoolean("Doctor Avaliable");
//     const needFollowUp = getInputAsBoolean("Need Follow Up");
//     const needMedication = getInputAsBoolean("Need Medication");
//     patientFlowChart(doctorAvaliable, needFollowUp, needMedication);
// });
