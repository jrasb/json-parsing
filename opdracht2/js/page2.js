const jsonInput = document.querySelector('#input-json').value;
const parseButton = document.querySelector('.parser-submit');
const jsonParsedOutput = document.querySelector('.parser-output');

const parsedInput = [];

const parseInput = (input) => {
    return JSON.parse(input)
}

parseButton.addEventListener('click', (element) => {
    element.preventDefault();

    if (jsonInput != "") {
        parsedInput.push(JSON.parse(jsonInput));
    } else {
        return;
    }

    jsonParsedOutput.innerHTML = parsedInput
})