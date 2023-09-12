const emailInput = document.querySelector("#email-input");
const formInput = document.querySelector("#form-input");
const testResult = document.querySelector("#text-result")



formInput.addEventListener("submit", function (event) {
    event.preventDefault();

    const string = emailInput.value;
    const stringLength = string.length;
    const wordCount = string.split(' ').filter(Boolean).length;
    /*this method makes use of the spread operator to split the characters of the 
    string into an array and the following methods to achieve the required result*/
    const reverseString = [...string].reverse().join('');
    // const reversedString = string.split('').reverse().join('');
    const upperCase = string.toUpperCase();
    const lowerCase = string.toLowerCase();

    const display = `
    <p>Number of characters: ${stringLength} </p>
    <p>Word Count: ${wordCount} </p>
    <p>Reversed String: ${reverseString} </p>
    <p>Upper Case: ${upperCase} </p>
    <p>Lower Case: ${lowerCase} </p>
    `
    testResult.innerHTML = display

}
)