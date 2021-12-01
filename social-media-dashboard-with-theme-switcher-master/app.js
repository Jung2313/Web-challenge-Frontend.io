const button = document.querySelector('.slide');

button.addEventListener("click", () => {

    
    document.body.classList.toggle('light');
    button.classList.toggle('active');
    //LocalStorage for keeping the light mode and dark mode
    if (document.body.classList.contains('light')) {
        localStorage.setItem('light-mode', 'true');
    }
    else {
        localStorage.setItem('light-mode', 'false');
    }

});

//getting the current mode
if (localStorage.getItem('light-mode') === 'true') {
    document.body.classList.add('light');
    button.classList.add('active');
}
else {
    document.body.classList.remove('light');
    button.classList.remove('active');
}