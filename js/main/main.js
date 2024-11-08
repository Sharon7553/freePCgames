function revealCode() {
    var codeElement = document.getElementById('steam-code');
    var codeText = codeElement.querySelector('.blurred');
    
    // Toggle the blur effect on the Steam code
    if (codeText.style.filter === 'blur(6px)') {
        codeText.style.filter = 'none'; // Remove blur to reveal code
    } else {
        codeText.style.filter = 'blur(6px)'; // Blur the code to hide it
    }
}

// Script to fade the background as the user scrolls
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var background = document.querySelector('.background');

  // Calculate opacity based on scroll position (you can adjust the value as needed)
  var opacityValue = 1 - (scrollPosition / 500);  // 500 is the scroll distance after which the image fades completely

  // Prevent the opacity from going below 0
  if (opacityValue < 0) {
    opacityValue = 0;
  }

  background.style.opacity = opacityValue;
});
