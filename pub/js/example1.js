"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.



function examples() {
    const cg = new InputCardGenerator();
    cg.createCard("login", true)
    cg.addInputField("Gender", "gender", "GenderForLogin", 1, "Gender")
    cg.addInputField("Birthdate", "chooseDate", "Birthdate", 1, "Birthdate")
    cg.addInputField("Login", "button", "LoginButton", 1, "", "submit")
   
    const style = {
        size: "small",
        labelColor: "secondary",
        inputBackgroundColor: "primary",
        inputTextColor: "primary",
        border: "secondary"
    }
    
    cg.changeInputStyle("GenderForLogin",style)
    cg.changeInputStyle("Birthdate",style)
   
    cg.setButtonAnimation("LoginButton")
    cg.setInputAnimation("GenderForLogin","pencil")
    cg.setInputAnimation("Birthdate","pencil")

}

examples();
