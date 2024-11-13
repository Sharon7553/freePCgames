const { user, error } = await supabase.auth.signUp({
  email: document.getElementById('email').value,
  password: document.getElementById('password').value,
});

if (error) {
  console.error("Sign-Up Error:", error.message);
  alert("Error: " + error.message);
} else {
  console.log("User signed up:", user);
  alert("Please check your email to confirm your account.");
}






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








async function receiveReward() {
  const uuid = 'user-uuid'; // Replace with actual UUID
  const coins = await getCoins(uuid); // Get current coins
  const newCoins = coins + 50;

  // Update the coin count in the database
  await supabase
    .from('memberstats')
    .update({ coins: newCoins })
    .eq('uuid', uuid);

  updateCoins(uuid); // Update the coin display
  alert('You received 50 coins!');
}




async function purchaseTicket() {
  const uuid = 'user-uuid'; // Replace with actual UUID
  const coins = await getCoins(uuid); // Get current coins

  if (coins >= 50) {
    const newCoins = coins - 50;

    // Update the coin balance in the database
    await supabase
      .from('memberstats')
      .update({ coins: newCoins })
      .eq('uuid', uuid);

    updateCoins(uuid); // Update the displayed coin count
    alert('Ticket purchased successfully!');
  } else {
    alert('You do not have enough coins!');
  }
}






