/* JS Library */
"use strict";


/* Structure of Library 
    1. Different Form --> background img/background colour, size, 
  
    2. TextFields -- > name, gender, username, password, date, email, number, select, button, text
        (with default styles and animation(...)), (save in slide # )
    
    3. ChangeStyle --> border, input text colour & size, required, shape, ?? 
 
    4. Animation --> onInput effect, slides change effect, Button onclick effect, moving effect, 
 
    Keywords: 
        (name, sex, username, password, date, email, number, select, button, text) - type   
        
       
    
*/
(function (global) {

    // Input Card Generator Library 
    function InputCardGenerator() {
        this.cardType = ""      // type of form 
        this.inputFields = []   // input Fields of the form 
        this.form = null          // Actual Dom Element 

    }


    InputCardGenerator.prototype = {

        addInputField: function (label, type, className, token, nameOnLeft, additionPara) {
            // additionPara:   name, username >> maxlength, password >> minlength, ...
            // Create an Input Textfield with label

            const defaultStyle = {
                width: "40%",
                padding: "10px",
                margin: "8px",
                border: "2px solid black",
                borderRadius: "4px",
            }
            const styleForIcon40 = "height:40px; border-radius:50%; margin:15px; margin-right:15px;";
            if (!this.form) {
                return false;
            }
            const inputContainer = document.createElement('div')
            inputContainer.style = "margin-left:20%; display:flex; justify-content: flex-start;align-items: center;"
            inputContainer.className = className
            //inputContainer.style = " white-space: nowrap; overflow-x: auto;"
            this.inputFields.push(className)
            let input = null;
            let icon = null;
            let leftLabel = null;

            switch (type) {
                case "name":
                case "username":

                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/username_Icon.png"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }
                    if (nameOnLeft) {

                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style.fontSize = "20px"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("input")
                    input.placeholder = label
                    input.style.width = defaultStyle.width;
                    input.style.marginLeft = "15px";
                    input.style.padding = defaultStyle.padding
                    input.style.border = defaultStyle.border
                    input.style.borderRadius = defaultStyle.borderRadius
                    input.style.maxlength = `${additionPara}`
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "gender":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/select_Icon.png"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style.fontSize = "20px"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("select")
                    input.placeholder = label
                    input.style.width = "150px";
                    input.style.marginLeft = "15px";
                    input.style.padding = defaultStyle.padding
                    input.style.border = defaultStyle.border
                    input.style.borderRadius = defaultStyle.borderRadius
                    const List = ["Male", "Female", "Other"]
                    List.map(function (each) {
                        const option = document.createElement("option")
                        option.value = each
                        option.appendChild(document.createTextNode(each))
                        input.appendChild(option)
                    })
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "password":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/key_Icon.jpg"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = " font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("input")
                    input.placeholder = label
                    input.type = "password"
                    input.style = `width:${defaultStyle.width}; margin-left:15px; padding:${defaultStyle.padding}; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    input.style.minlength = `${additionPara}`
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "chooseDate":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/date_Icon.jpeg"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }

                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = "font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }
                    input = document.createElement("input")
                    input.type = "date"
                    input.style = `width:${defaultStyle.width}; margin:15px; padding:${defaultStyle.padding}; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    try {
                        input.placeholder = label
                        input.style.min = additionPara[0]
                        input.style.max = additionPara[1]
                    } catch (e) { }

                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "typeDate":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/date_Icon.jpeg"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }

                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = " font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("input")
                    input.placeholder = "YYYY-MM-DD"
                    input.style = `width:${defaultStyle.width}; margin-left:15px; padding:${defaultStyle.padding}; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "email":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/email_Icon.png"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = " font-size: 20px; "
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("input")
                    input.placeholder = label
                    input.style = `type:email; width:${defaultStyle.width}; margin-left:15px;  padding:${defaultStyle.padding}; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "number":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/number_Icon.png"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`
                        inputContainer.appendChild(icon)
                    }
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = " font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("input")
                    input.placeholder = label
                    input.type = "number"
                    input.style = `width:${defaultStyle.width}; padding:${defaultStyle.padding}; margin:${defaultStyle.margin}; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    try {
                        input.style.min = additionPara[0]
                        input.style.max = additionPara[1]
                        input.style.maxlength = [2]
                    } catch (e) { }

                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "select":
                    if (token) {
                        icon = document.createElement("img")
                        icon.src = "images/select_Icon.png"
                        icon.style.height = "40px"
                        icon.style.borderRadius = "50%"
                        icon.style.margin = "15px"
                        icon.className = `${className}_icon`

                        inputContainer.appendChild(icon)

                    }
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style.fontSize = "20px"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }

                    input = document.createElement("select")
                    input.style = `width:50%; padding:${defaultStyle.padding}; margin: 15px; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius};`
                    try {
                        additionPara.map(function (each) {
                            const option = document.createElement("option")
                            option.value = each
                            option.appendChild(document.createTextNode(each))
                            input.appendChild(option)
                        })
                    } catch (e) { console.log(e) }

                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                case "button":
                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = " font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }
                    input = document.createElement("button")
                    input.style = `width:80px; height:40px; margin:15px; border:${defaultStyle.border}; border-radius:10px;`
                    input.style.type = "button"
                    if (additionPara === "submit") {
                        input.style.type = additionPara
                    }
                    input.appendChild(document.createTextNode(label))
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

                default:

                    if (nameOnLeft) {
                        leftLabel = document.createElement("label")
                        leftLabel.appendChild(document.createTextNode(nameOnLeft))
                        leftLabel.style = "font-size: 20px;"
                        leftLabel.className = `${className}_label`
                        inputContainer.appendChild(leftLabel)
                    }
                    input = document.createElement("textarea")
                    input.placeholder = label
                    input.style = `width:50%; padding:${defaultStyle.padding}; margin: 15px; border:${defaultStyle.border}; border-radius:${defaultStyle.borderRadius}; resize: none; `
                    try {
                        input.style.maxlength = additionPara

                    } catch (e) { }
                    input.className = `${className}_input`
                    inputContainer.appendChild(input)
                    break;

            }
            this.form.appendChild(inputContainer) // Add to DOM
            return inputContainer
        },

        checkClassName: function (className) {
            return (className in this.inputFields)
        },
        changeInputSize: function (className, size) { // Change the size of each input container (icon, label, and inputField)
            try {
                const icon = document.getElementsByClassName(className + "_icon")[0]
                if (size === "large") {
                    icon.style.height = "60px"
                }
                else if (size === "medium") {
                    icon.style.height = "50px"
                }
                else if (size === "small") {
                    icon.style.height = "40px"
                }
                else {
                    icon.style.height = "40px"
                }
            } catch (e) { }
            try {
                const label = document.getElementsByClassName(className + "_label")[0]
                if (size === "large") {
                    label.style.fontSize = "40px"
                }
                else if (size === "medium") {
                    label.style.fontSize = "30px"
                }
                else if (size === "small") {
                    label.style.fontSize = "20px"
                }
                else {
                    label.style.fontSize = "20px"
                }
            } catch (e) { }
            const input = document.getElementsByClassName(className + "_input")[0]
            if (size === "large") {
                input.style.fontSize = "25px"
            }
            else if (size === "medium") {
                input.style.fontSize = "20px"
            }
            else if (size === "small") {
                input.style.fontSize = "13px"
            }
            else {
                input.style.fontSize = "13px"
            }
        },
        changeLabelColor: function (className, color, userGiven) { // Change the color of the Label 
            try {
                const label = document.getElementsByClassName(className + "_label")[0]
                if (color === "primary") {
                    label.style.color = "#2d08bf"
                }
                else if (color === "secondary") {
                    label.style.color = "#c30136"
                }
                else if (color === "customize") {
                    label.style.color = userGiven
                }
                else {
                    label.style.color = "black"
                }
            } catch (e) { }
        },
        changeInputBackgroundColor: function (className, color, userGiven) { // Change the color of Input field background
            try {
                const input = document.getElementsByClassName(className + "_input")[0]
                if (color === "primary") {
                    input.style.backgroundColor = "#8deae7"
                }
                else if (color === "secondary") {
                    input.style.backgroundColor = "#fff3b3"
                }
                else if (color === "customize") {
                    input.style.backgroundColor = userGiven
                }
                else {
                    input.style.backgroundColor = "white"
                }
            } catch (e) { }
        },
        changeInputTextColor: function (className, color, userGiven) {  // Change the color of input text color
            try {
                const input = document.getElementsByClassName(className + "_input")[0]
                if (color === "primary") {
                    input.style.color = "#082aad"
                }
                else if (color === "secondary") {
                    input.style.color = "#a70540"
                }
                else if (color === "customize") {
                    input.style.color = userGiven
                }
                else {
                    input.style.color = "black"
                }
            } catch (e) { }
        },
        changeBorder: function (className, border, userGiven) { // Change the style of the inputField Border 
            try {
                const input = document.getElementsByClassName(className + "_input")[0]
                if (border === "primary") {
                    input.style.border = "1px solid #0e61c7"
                }
                else if (border === "secondary") {
                    input.style.border = "1px solid #12da0f"
                }
                else if (border === "customize") {
                    input.style.border = userGiven
                }
                else {
                    input.style.border = "2px solid black"
                }
            } catch (e) { }
        },

        changeInputStyle: function (className, styleObject) {
            // border, textcolour, background colour, label colour,  size 
            if ("size" in styleObject) {
                this.changeInputSize(className, styleObject.size)
            }
            if ("labelColor" in styleObject) {
                if (styleObject.labelColor === "primary" | styleObject.labelColor === "secondary" | styleObject.labelColor === "default") {
                    this.changeLabelColor(className, styleObject.labelColor)
                }
                else {
                    this.changeLabelColor(className, "customize", styleObject.labelColor)
                }
            }
            if ("inputBackgroundColor" in styleObject) {
                if (styleObject.inputBackgroundColor === "primary" | styleObject.inputBackgroundColor === "secondary" | styleObject.inputBackgroundColor === "default") {
                    this.changeInputBackgroundColor(className, styleObject.inputBackgroundColor)
                }
                else {
                    this.changeInputBackgroundColor(className, "customize", styleObject.inputBackgroundColor)
                }
            }
            if ("inputTextColor" in styleObject) {
                if (styleObject.inputTextColor === "primary" | styleObject.inputTextColor === "secondary" | styleObject.inputTextColor === "default") {
                    this.changeInputTextColor(className, styleObject.inputTextColor)
                }
                else {
                    this.changeInputTextColor(className, "customize", styleObject.inputTextColor)
                }
            }
            if ("border" in styleObject) {
                if (styleObject.border === "primary" | styleObject.border === "secondary" | styleObject.border === "default") {
                    this.changeBorder(className, styleObject.border)
                }
                else {
                    this.changeBorder(className, "customize", styleObject.border)
                }
            }
        },

        changeFormTitleStyle: function (titleObject) {
            const title = document.getElementsByClassName("formTitle")[0]
            if ("title" in titleObject) {

                title.innerHTML = titleObject.title
            }
            if ("titleSize" in titleObject) {
                if (titleObject.titleSize === "large") {
                    title.style.fontSize = "40px"
                }
                else if (titleObject.titleSize === "medium") {
                    title.style.fontSize = "32px"
                }
                else if (titleObject.titleSize === "small") {
                    title.style.fontSize = "25px"
                }
            }
            if ("titleColor" in titleObject) {
                if (titleObject.titleColor === "primary") {
                    title.style.color = "#480194"
                }
                else if (titleObject.titleColor === "secondary") {
                    title.style.color = "#920100"
                }
                else if (titleObject.titleColor === "default") {
                    title.style.color = "black"
                }
                else {
                    title.style.color = titleObject.titleColor
                }
            }
        },

        createCard: function (formType, autofillInput, background, userGiven) {     // create the form ("login","register","creditCard", others are "custom")

            const body = document.querySelector('body')
            const inputForm = document.createElement('form')
            inputForm.style = "width:100%;height:100%; border-radius:10px; border:1px solid black";
            inputForm.style.minHeight = "500px"
            inputForm.style.display = "inline-block"
            inputForm.className = 'inputForm'
            this.form = inputForm
            body.appendChild(this.form)

            const title = document.createElement('h1')
            title.className = "formTitle"
            title.style = "margin-left:40%; margin-top:3%; color:black"

            switch (formType) {
                case "login":

                    title.appendChild(document.createTextNode('Login Form'))
                    this.form.appendChild(title)
                    inputForm.style.backgroundImage = "url('images/login_page.jpeg')"
                    this.cardType = formType
                    if (autofillInput) {
                        // two default text fields for login --> (username, password)
                        this.addInputField("Username", "username", "UsernameForLogin", 1, "Username")
                        this.addInputField("Password", "password", "PasswordForLogin", 1, "Password")
                        this.setInputAnimation("UsernameForLogin", "keyboard")
                        this.setInputAnimation("PasswordForLogin", "keyboard")
                        //this.addInputField("Login","button","buttonForLogin",1,"")
                    }

                    break;

                case "register":
                    title.appendChild(document.createTextNode('Register Form'))
                    this.form.appendChild(title)
                    inputForm.style.backgroundImage = "url('images/register_page.jpg')"
                    this.cardType = formType
                    if (autofillInput) {
                        // two default text fields for login --> (username, password)
                        this.addInputField("Email", "email", "EmailForRegister", 1, "Email")
                        this.addInputField("Name", "name", "NameForRegister", 1, "Name")
                        this.addInputField("Password", "password", "PasswordForRegister", 1, "Password")
                        this.setInputAnimation("EmailForRegister", "pencil")
                        this.setInputAnimation("NameForRegister", "pencil")
                        this.setInputAnimation("PasswordForRegister", "pencil")

                        //this.addInputField("Login","button","buttonForLogin",1,"")
                    }

                    break;

                case "creditCard":

                    title.appendChild(document.createTextNode('Credit Card Information'))
                    this.form.appendChild(title)
                    inputForm.style.backgroundImage = "url('images/creditCard_page.jpg')"
                    this.cardType = formType
                    if (autofillInput) {
                        // default textfields --> (cardNum,expDate,cardHolderName,CVV)
                        this.addInputField("Credit Card Number", "number", "creditCardNumber", 1, "Credit Card Number")
                        this.addInputField("Expire Date", "chooseDate", "expDate", 1, "Expire Date")
                        this.addInputField("Card Holder's Name", "name", "cardHolderName", 1, "Card Holder's Name")
                        this.addInputField("CVV", "number", "CVV", 1, "CVV")
                        this.setInputAnimation("creditCardNumber")
                        this.setInputAnimation("expDate")
                        this.setInputAnimation("cardHolderName")
                        this.setInputAnimation("CVV")

                    }

                    break;

                default:
                    // customize form 
                    title.appendChild(document.createTextNode('Customized Form'))
                    this.form.appendChild(title)
                    this.cardType = 'customize'
                    if (background === "img") {
                        inputForm.style.backgroundImage = `url('${userGiven}')`
                    }
                    else if (background === "color") {
                        inputForm.style.backgroundColor = userGiven
                    }


            }
        },
        setButtonAnimation: function (className) {
            const button = document.getElementsByClassName(className + "_input")[0]
            const color = button.style.backgroundColor
            button.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "pink";
                event.target.style.border = "3px orange solid"
                event.target.style.transition = "ease-in-out 0.5s";
            })
            button.addEventListener("mouseleave", function (event) {
                event.target.style.backgroundColor = color;
                event.target.style.border = "1px purple dotted"
                event.target.style.transition = "ease-in-out 0.5s";
            })
        },
        setInputAnimation: function (className, icon) {
            const inputContainer = document.getElementsByClassName(className)[0]
            const input = document.getElementsByClassName(className + "_input")[0]
            const originalBorder = input.style.border
            const originalBackground = input.style.backgroundColor
            input.addEventListener("focus", function (event) {
                const pencil = document.createElement('img')
                if (icon === "keyboard") {
                    pencil.src = "images/keyboard_icon.png"
                }
                else if (icon === "pencil") {
                    pencil.src = "images/pencil_icon.png"
                }
                else {
                    pencil.src = "images/dot_icon.png"
                }
                pencil.className = "Pencil"
                inputContainer.appendChild(pencil)
                pencil.style.height = "25px"
                pencil.style.border = "black 1px solid"
                pencil.style.transform = 'translateX(-40px)'
                pencil.style.borderRadius = "50%"
                let pos = 0;
                let state = 0;
                const id = setInterval(function () {
                    if (pos === 10) {
                        state = 1
                    } else if (pos === -10) {
                        state = 0;
                    }
                    if (state === 0) {
                        pos += 2;
                    }
                    else if (state === 1) {
                        pos -= 2;
                    }
                    pencil.style.transform = `translateX(-40px) translateY(${-pos}px`
                }, 50);
                input.style.border = "2px dashed #ca10bb"
                input.style.backgroundColor = "#f3f3db"
                input.style.transition = "ease-in-out 0.7s"

            })
            input.addEventListener("focusout", function (event) {
                inputContainer.removeChild(document.getElementsByClassName("Pencil")[0])
                input.style.border = originalBorder
                input.style.backgroundColor = originalBackground
                input.style.transition = "ease-in-out 0.7s"

            })
        }

    }
    global.InputCardGenerator = global.InputCardGenerator || InputCardGenerator
})(window);