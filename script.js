function addingEventListener() {
    const buttons = document.querySelectorAll('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    buttons.forEach(button => {
        button.addEventListener('click', clickAlert);
    });
}

function addingOnMouseOver() {
    const footer = document.querySelector('footer');

    function myScript() {
        console.log('The footer was clicked!');
    }

    footer.addEventListener('mouseover', myScript);
}

function addingOnMouseOut() {
    const footer = document.querySelector('footer');

    function myScript() {
        console.log('The footer was clicked!');
    }

    footer.addEventListener('mouseout', myScript);
}