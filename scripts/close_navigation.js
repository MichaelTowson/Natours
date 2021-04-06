//This script closes the navigation menu window when a link is clicked. It probably wouldn't be needed if the links went to external pages, but if the links went to anchors, this would be necessary.


window.onload = (event) => {
    // Select DOM items
    const navLink = document.querySelectorAll('.navigation__item'); // nav item class
    console.log(navLink.length);
    const checkbox = document.querySelector('.navigation__checkbox'); //checkbox class
    console.log(checkbox);

    // Add Event Listener to every nav link
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', checkboxOff);
        console.log('Adding event listener')
    }

    // Uncheck checkbox
    function checkboxOff() {
        checkbox.checked = false;
    }
};