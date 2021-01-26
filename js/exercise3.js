$(document).ready(function () {
    
// Chrome
//1.	Ctrl-Shift-I to display Developer Tools
//2.	Go to Application and expand Local Storage

    $("#btnSubmit").click(function () {
        var person = localStorage.getItem("person");
        var message = "";

        message += "Name: " + person.name + "<br/>";
        message += "Email: " + person.email + "<br/>";
        message += "PostalCode: " + person.postalCode;


        $("#results").html(message);

        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();

        localStorage.setItem('person', JSON.stringify(person));


    });





});


