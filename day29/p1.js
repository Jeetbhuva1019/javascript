$(document).ready(function () {
    $("#signup").submit(function (event) {
        event.preventDefault();
        $("#err").text("")

        let password = $("#pw").val()
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (password == "") {
            $("#err").text("Enter Student ID");
        } else if (!passwordRegex.test(password)) {
            $("#err").text("Enter Strong ID");
        }

        let email = $("#email").val()
        if (email == "") {
            $("#err").text("Enter Email ID");
        }

        let name1 = $("#name1").val()
        let name2 = $("#name2").val()
        if (name2 == "") {
            $("#err").text("Enter LastName");
        }
        if (name1 == "") {
            $("#err").text("Enter FirstName");
        }

    })

})