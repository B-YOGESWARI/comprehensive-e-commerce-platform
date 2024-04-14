 <script>
        // Predefined user credentials
        var correctUserId = "user123";
        var correctPassword = "password123";

        // Function to simulate user login
        function login() {
            // Retrieve user input
            var userId = document.getElementById("userId").value;
            var password = document.getElementById("password").value;

            // Check if the entered credentials match the predefined values
            if (userId === correctUserId && password === correctPassword) {
                // Successful login
                document.getElementById("loginMessage").innerText = "Login successful!";
                // Redirect to another page or perform further actions
            } else {
                // Incorrect credentials
                document.getElementById("loginMessage").innerText = "Incorrect user ID or password.";
            }
        }
// Function to show the new user registration form
        function showNewUserForm() {
            document.getElementById("newUserForm").style.display = "block";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("forgotPasswordForm").style.display = "none";
        }

        // Function to show the forgot password form
        function showForgotPasswordForm() {
            document.getElementById("forgotPasswordForm").style.display = "block";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("newUserForm").style.display = "none";
        }

        // Function to simulate new user registration
        function register() {
            var newUserId = document.getElementById("newUserId").value;
            var newPassword = document.getElementById("newPassword").value;
            // Simulate registration by storing new credentials
            correctUserId = newUserId;
            correctPassword = newPassword;
            document.getElementById("registrationMessage").innerText = "Registration successful!";
        }
        // Function to simulate resetting the password
        function resetPassword() {
            var forgotUserId = document.getElementById("forgotUserId").value;
            // Check if the user ID exists (not implemented in this example)
            if (forgotUserId === correctUserId) {
                // Reset the password to a default value (not secure, for demonstration only)
                correctPassword = "reset123";
                document.getElementById("resetPasswordMessage").innerText = "Password reset successful. New password: reset123";
            } else {
                document.getElementById("resetPasswordMessage").innerText = "User ID not found.";
            }
        }
    </script>
</body>
</html>
