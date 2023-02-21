const title = document.querySelector('#title').value;
const image = document.querySelector('#image').value;
const description = document.querySelector('#description').value;

const jsonStringOutput = document.querySelector('.jsonStringOutput');

const stringifyMessage = () => {
    return JSON.stringify(new Message(title, image, description)); 
}

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', (element) => {
    element.preventDefault();

    jsonStringOutput.innerHTML = stringifyMessage()
});
