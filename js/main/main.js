function revealCode() {
    var codeElement = document.getElementById('steam-code');
    var codeText = codeElement.querySelector('.blurred');
    
    // Toggle the blur effect on the Steam code
    if (codeText.style.filter === 'blur(6px)') {
        codeText.style.filter = 'none'; // Remove blur to reveal code
    } else {
        codeText.style.filter = 'blur(6px)'; // Blur the code to hide it
    }

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // Block Ctrl+C, Ctrl+V, and Ctrl+X
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v') || (e.ctrlKey && e.key === 'x')) {
        e.preventDefault();
    }
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Copying is disabled on this page.');
});

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';













