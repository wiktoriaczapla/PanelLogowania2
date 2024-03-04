function closeContainer2() {
    var container2Element = document.querySelector('.container2');
    var mainElement = document.querySelector('.main');

    container2Element.style.visibility = 'hidden';
    mainElement.style.display = 'none';
}


function showElements() {
    var container2Element = document.querySelector('.container2');
    var mainElement = document.querySelector('.main');

    container2Element.style.visibility = 'visible';
    mainElement.style.display = 'flex'; 
}

