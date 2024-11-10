// Initialize Supabase client
const supabaseUrl = 'https://knlovzpoxlozjgkgttou.supabase.co';  // Your Supabase URL
const supabaseKey = 'your-supabase-api-key'; // Your Supabase Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Sign-up function
async function signUp(email, password) {
    try {
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            // If there's an error during sign-up, show an alert
            console.error('Error during sign-up:', error);
            alert(error.message);
        } else {
            // Successful sign-up
            console.log('User signed up:', user);
            // Redirect to the login page or show a success message
            window.location.href = 'login.html';  // Redirect to login page after sign-up
        }
    } catch (err) {
        console.error('Unexpected error during sign-up:', err);
        alert('An unexpected error occurred. Please try again.');
    }
}

// Event listener for form submission
document.getElementById('signup-form').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const email = event.target.email.value;   // Get the email input value
    const password = event.target.password.value;  // Get the password input value
    signUp(email, password);  // Call the sign-up function
};
