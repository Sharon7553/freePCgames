

// Initialize Supabase client
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://knlovzpoxlozjgkgttou.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubG92enBveGxvempna2d0dG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMzc0MzcsImV4cCI6MjA0NjgxMzQzN30.xiw4xK4TqOTp-c5VG8GbequxIYJQbfuUIEsPajig7xs'; // Use your actual public key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to get coins for a user based on their UUID
async function getCoins(uuid) {
  const { data, error } = await supabase
    .from('memberstats')  // The table name in your Supabase database
    .select('coins')      // Select the 'coins' column
    .eq('uuid', uuid)     // Filter by the user's UUID
    .single();            // .single() ensures only one result is returned

  if (error) {
    console.error('Error fetching coins:', error);
    return 0; // Return 0 if there's an error or no record found
  }

  return data.coins; // Return the coin balance
}

// Export the function to use it in your HTML page
export { getCoins };









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



document.addEventListener('DOMContentLoaded', function () {
    // Initialize Supabase
    const supabaseUrl = 'https://knlovzpoxlozjgkgttou.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubG92enBveGxvempna2d0dG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMzc0MzcsImV4cCI6MjA0NjgxMzQzN30.xiw4xK4TqOTp-c5VG8GbequxIYJQbfuUIEsPajig7xs'; // Replace with your actual Supabase key
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Sign up function
    async function signUp() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const { user, error } = await supabase.auth.signUp({ email, password });

            if (error) {
                console.error("Error during sign-up:", error);
                alert(error.message); // Show error if any
            } else {
                console.log("Sign-up successful:", user);
                window.location.href = "/pages/login.html"; // Redirect to login page
            }
        } catch (err) {
            console.error("Error during sign-up:", err);
            alert("An unexpected error occurred during sign-up.");
        }
    }

    // Handle form submission
    const signupForm = document.getElementById("signup");
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent default form submission
        signUp();  // Call the signUp function
    });

    // Password visibility toggle
    const passwordToggle = document.querySelector('.hide-show span');
    const passwordInput = document.getElementById("password");

    passwordToggle.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = 'Show';
        }
    });
});










