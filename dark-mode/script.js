let body = document.querySelector('body').classList;
let button = document.querySelector('button');
let para = document.querySelectorAll('p');
    para[1].classList.add('teal-bg');

function toggleDarkMode(){
    body.toggle("dark-mode");
    button.classList.toggle('dark-mode-button');
}

button.addEventListener('click', toggleDarkMode)

    