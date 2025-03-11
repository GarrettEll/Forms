document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const input = document.getElementById('myInput');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        // Regular expression for alphanumeric values
        const regex = /^[a-z0-9]+$/i;

        // Validate the input value
        if (!regex.test(input.value)) {
            // Display error message
            errorMessage.textContent = 'Please enter only alphanumeric characters.';
            errorMessage.style.display = 'block';

            // Hide success message
            successMessage.style.display = 'none';

            // Prevent form submission
            event.preventDefault();
        } else {
            // Hide error message
            errorMessage.style.display = 'none';

            // Display success message
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.style.display = 'block';

            // Prevent actual form submission for demonstration purposes
            event.preventDefault();
        }
    });
});
