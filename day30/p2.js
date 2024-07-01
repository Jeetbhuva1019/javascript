
$(document).ready(function () {

    $("#submit").submit(function (event) {
        event.preventDefault()
        $("#err").text("");

        let username = $("#username").val()
        let username_regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/

        if (username === "") {
            $("#err").text("Enter a valid username.")
        }
        else {
            if (!username_regex.test(username)) {
                $("#err").text("Enter a valid username.")
            }

            let email = $("#email").val()
            let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

            if (email === "") {

                $("#err").text("Enter a valid Email Id.")
            }
            else {
                if (!email_regex.test(email)) {

                    $("#err").text("Enter a valid Email Id.")
                }
            }

            let password = $("#password").val()
            let password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            let confirm_password = $("#cpw").val()


            if (password === "") {
                $("#err").text("Enter a should have 1 uppercase charecter, 1 numeric, 1 special charecter.")
            }
            else {
                if (!password_regex.test(password)) {
                    $("#err").text("Enter a should have 1 uppercase charecter, 1 numeric, 1 special charecter.")

                }
            }

            if (password !== confirm_password) {
                $("#err").text("Password does not match.")
            }
        }
    })

})

