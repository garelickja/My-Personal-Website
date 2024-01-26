function addingEventListener() {
    const buttons = document.querySelectorAll('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    buttons.forEach(button => {
        button.addEventListener('click', clickAlert);
    });
}
function myFunction() {
    document.getElementById("demo").style.color = "red";
}