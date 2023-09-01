$(document).ready(function() {
    setInterval(() => {
        var owlNextButton = document.querySelector('.owl-next');
        if (owlNextButton && window.location.href === "http://localhost:3000/") {
            owlNextButton.click();
        }
    }, 5000);
});