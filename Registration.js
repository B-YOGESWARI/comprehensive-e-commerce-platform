 <script>
        // Function to simulate user registration
        function register() {
            // Retrieve values from input fields and perform validation
            var userId = document.getElementById("userId").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var address = document.getElementById("address").value;
            var city = document.getElementById("city").value;
            var zip = document.getElementById("zip").value;
            var state = document.getElementById("state").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Additional validation can be added here

            // Display registration success message
            alert("Registration successful!");

            // Clear form fields
            document.getElementById("registrationForm").reset();
        }
    </script>
</body>
</html>
