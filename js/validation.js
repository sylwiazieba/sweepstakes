$(function() {
    $("#register-form").validate({
        rules: {
            firstName: {
                required: true, 
            },
            lastname: {
                required: true,
            },
             email: {
                 required: true,
                 email: true
        },
        messages: {
            email: {
                required: 'Please enter an email address.',
                email: 'Please enter a <em>valid</em> email address.'
            }
        },
             submitHandler: function (form) {
            $('form').append('valid form submitted');
            return false;
        }
    }
    });
});