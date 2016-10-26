$(function() {
    
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element) {
            $(element)
            .closest('.form-group')
            .addClass('has-error')
        },
        unhighlight: function(element) {
            $(element)
            .closest('.form-group')
            .removeClass('has-error')
        },
        errorPlacement: function (error,element) {
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    
    $("#register-form").validate({
        rules: {
            firstName: {
                required: true, 
            },
            lastName: {
                required: true,
            },
             email: {
                 required: true,
                 email: true
            },
             birth: {
                 required: true,
             },
             zip: {
                 required: true,
             },
             provider: {
                 required: true,
             },
             terms: {
                 required: true,
             }
        },
        messages: {
            firstName: {
                required: 'Please enter your first name',
            },
            lastName: {
                required: 'Please enter your last name',
            },
            email: {
                required: 'Please enter an email address.',
                email: 'Please enter a <em>valid</em> email address.'
            },
            zip: {
                required: 'Please enter your zip code',
            },
            birth: {
                required: 'Please enter your full date of birth',
            },
            provider: {
                required: 'Please choose a provider',
            },
            terms: {
                required: 'Please check the box',
            },
        }
    });
});