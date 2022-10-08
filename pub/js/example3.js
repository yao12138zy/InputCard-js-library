"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.



function examples() {
    const cg = new InputCardGenerator();
    cg.createCard("creditCard", true)
    cg.addInputField("Bank's Name", "select", "BankName", 1, "Bank's Name",["TD","RBC","BMO"])
    cg.addInputField("Confirm", "button", "ConfirmButton", 1, "", "submit")
   
    const style = {
        size: "small",
        labelColor: "default",
        inputBackgroundColor: "default",
        inputTextColor: "primary",
        border: "primary"
    }
    
    cg.changeInputStyle("BankName",style)
    cg.setButtonAnimation("ConfirmButton")
    cg.setInputAnimation("BankName","pencil")

}

examples();
