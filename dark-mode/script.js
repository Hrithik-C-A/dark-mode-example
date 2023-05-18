let body = document.querySelector('body').classList;
let button = document.querySelector('button');

function toggleDarkMode(){
    body.toggle("dark-mode");
    button.classList.toggle('dark-mode-button');
}

button.addEventListener('click', toggleDarkMode)

    