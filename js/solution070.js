// When provided with a letter, return its position in the alphabet.
function position(letter){
    const differenceCharcodeAndLetters = 96
    const lowerCaseCharCode = letter.toLowerCase()
    const alphabetPosition = lowerCaseCharCode.charCodeAt() - differenceCharcodeAndLetters
    return `Position of alphabet: ${alphabetPosition}`
    }