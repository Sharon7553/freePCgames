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

// Import Supabase library if it's not already in your HTML
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';

// Supabase initialization
const supabaseUrl = 'https://knlovzpoxlozjgkgttou.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubG92enBveGxvempna2d0dG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMzc0MzcsImV4cCI6MjA0NjgxMzQzN30.xiw4xK4TqOTp-c5VG8GbequxIYJQbfuUIEsPajig7xs';
const supabase = createClient(supabaseUrl, supabaseKey);

$(function(){
  $('.hide-show').show();
  $('.hide-show span').addClass('show')
  
  $('.hide-show span').click(function(){
    if( $(this).hasClass('show') ) {
      $(this).text('Hide');
      $('input[name="login[password]"]').attr('type','text');
      $(this).removeClass('show');
    } else {
       $(this).text('Show');
       $('input[name="login[password]"]').attr('type','password');
       $(this).addClass('show');
    }
  });
    
    $('form button[type="submit"]').on('click', function(){
        $('.hide-show span').text('Show').addClass('show');
        $('.hide-show').parent().find('input[name="login[password]"]').attr('type','password');
    }); 
});










