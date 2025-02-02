/*

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

*/


// Get all the buttons and modal boxes
const buttons = document.querySelectorAll('.folder');
const modalBoxes = document.querySelectorAll('.modal-box');

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the corresponding modal box
    const modalBoxId = button.id.replace('-button', '-modal-box');
    const modalBox = document.getElementById(modalBoxId);

    // Show the modal box
    modalBox.style.display = 'block';
  });
});

// Add event listener to the document to close the modal box when clicking outside
document.addEventListener('click', (event) => {
  // Check if the click is outside a modal box
  if (!modalBoxes.some((modalBox) => modalBox.contains(event.target))) {
    // Hide all modal boxes
    modalBoxes.forEach((modalBox) => {
      modalBox.style.display = 'none';
    });
  }
});

// Add event listeners to the close buttons
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    // Get the parent modal box
    const modalBox = closeButton.parentNode.parentNode;

    // Hide the modal box
    modalBox.style.display = 'none';
  });
});



function updateDateTime() {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();

    document.getElementById("date").innerHTML = dateString;
    document.getElementById("time").innerHTML = timeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);
