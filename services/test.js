var nameInput = document.getElementById('sip');
let title = document.querySelector(".title");

console.log(nameInput);

document.querySelector('.button').addEventListener('click', function (e) {
    console.log(nameInput.value);  
    title.textContent = nameInput.value;

});