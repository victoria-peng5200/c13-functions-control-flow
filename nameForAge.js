
function nameForAge(age) {
    if (age < 2) return 'baby'
    if ((age > 2) && (age < 12)) return 'child'
    if (age > 20) return 'twenty somthing'
    if ((age > 30) && (age < 40)) return 'thirty something'
    if (age > 40) return 'almost grown up'
}

console.log('Name for age 7 is', nameForAge(7))
