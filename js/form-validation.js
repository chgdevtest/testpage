$(function () {
    $("form[name='message-form']").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            comments: "required"
        },
        messages: {
            firstName: "Please enter your firstname",
            lastName: "Please enter your lastname",
            email: "Please enter a valid email address",
            phone: "Please enter your phone number",
            comments: "Please enter a comment",

        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});