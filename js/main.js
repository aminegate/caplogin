$(document).ready(function() {

    
    // Function to check if both inputs are filled
function checkInputs() {
    const isUsernameFilled = $('#fname').val() !== '';
    const isPasswordFilled = $('#pwd').val() !== '';
    const submitButton = $('input[type="submit"]'); // Assuming the button is the submit input

    // Add or remove the class and enable/disable the button based on input values
    if (isUsernameFilled && isPasswordFilled) {
        submitButton.addClass('btnGradient') // Add gradient class
                     .removeAttr('disabled') // Enable button
                     .css('cursor', 'pointer'); // Change cursor to pointer
    } else {
        submitButton.removeClass('btnGradient') // Remove gradient class
                     .attr('disabled', 'disabled') // Disable button
                     .css('cursor', 'default'); // Change cursor back to default
    }
}

// Handle input events for username
$('#fname').on('focus input', function() {
    const placeholderText = 'Nom d\'utilisateur';
    $(this).attr('placeholder', ''); // Hide placeholder on focus
    checkInputs(); // Check inputs while typing
});

// Handle input events for password
$('#pwd').on('focus input', function() {
    const placeholderText = 'Mot de pass';
    $(this).attr('placeholder', ''); // Hide placeholder on focus
    checkInputs(); // Check inputs while typing
});

// Restore placeholder on blur (when clicking away) if input is empty
$('input[type="text"], input[type="password"]').on('blur', function() {
    const placeholderText = $(this).is('#fname') ? 'Nom d\'utilisateur' : 'Mot de pass'; // Determine placeholder text
    if ($(this).val() === '') {
        $(this).attr('placeholder', placeholderText); // Restore placeholder if input is empty
    }
});

// Toggle visibility for both username and password placeholders
$('.fa-eye').on('click', function() {
    const input = $(this).siblings('input');
    const isInputEmpty = input.val() === '';
    const placeholderText = input.is('#fname') ? 'Nom d\'utilisateur' : 'Mot de pass'; // Check input type

    // Toggle placeholder visibility
    if (isInputEmpty) {
        input.attr('placeholder', placeholderText); // Show placeholder if input is empty
    } else {
        input.attr('placeholder', ''); // Hide placeholder if input is filled
    }

    checkInputs(); // Check inputs when toggling visibility
});

// Check inputs initially to set the button state correctly
checkInputs();



(function($) {
    $('input[name="company"]').on('change', function() {
        if ($(this).val() === 'capram') {
            // Switch border
            $('.company-capram').css('border', '3px solid #f7943c');
            $('.company-turbo').css('border', 'none');
            // Change text color to #f7943c
            $('form p span').css('color', '#f7943c');
            // Change text span from turbo to capram
            $('form p span').text('Capram'); // Change text to 'Capram'
            // Show capram-check image and hide turbo-check image
            $('.capram-check').fadeIn(50);
            $('.turbo-check').fadeOut(50);
        } else if ($(this).val() === 'turbo') {
            // Switch border
            $('.company-turbo').css('border', '3px solid #eebe2c');
            $('.company-capram').css('border', 'none');
            // Change text color to #eebe2c
            $('form p span').css('color', '#eebe2c');
            // Change text span from capram to turbo
            $('form p span').text('Turbo'); // Change text to 'Turbo'
            // Show turbo-check image and hide capram-check image
            $('.turbo-check').fadeIn(50);
            $('.capram-check').fadeOut(50);
        }
    });
})(jQuery);

    
    
});
