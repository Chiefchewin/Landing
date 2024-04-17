document.addEventListener('DOMContentLoaded', function() {
    const hexagon = document.getElementById('hexagon');
    const textElement = document.getElementById('MP');
    const mainContent = document.querySelector('.main-content');


    textElement.addEventListener('animationend', function(event) {
        hexagon.style.animation = 'shrink 2s forwards';
    });

    hexagon.addEventListener('animationend', function(event) {
        if (event.animationName === 'shrink'){
             hexagon.style.display = 'none';
             mainContent.style.display = 'flex';
        }
    });


});

