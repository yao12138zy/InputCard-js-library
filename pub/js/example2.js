"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.



function examples() {
    const cg = new InputCardGenerator();
    cg.createCard("register", true)
    cg.addInputField("Birthdate", "typeDate", "Birthdate", 1, "Birthdate")
    cg.addInputField("Role", "select", "Role", 1, "Role",["Student","Teacher","Other"])
    cg.addInputField("Additional Info", "", "AdditionalInfo", 1, "Additional Info")
    cg.addInputField("Register", "button", "RegisterButton", 1, "", "submit")
   
    const style = {
        size: "small",
        labelColor: "primary",
        inputBackgroundColor: "secondary",
        inputTextColor: "secondary",
        border: "primary"
    }
    
    cg.changeInputStyle("Birthdate",style)
    cg.changeInputStyle("Role",style)
    cg.changeInputStyle("AdditionalInfo",style)
   
    cg.setButtonAnimation("RegisterButton")
    cg.setInputAnimation("Birthdate","keyboard")
    cg.setInputAnimation("Role","keyboard")
    cg.setInputAnimation("AdditionalInfo","keyboard")

}

examples();
