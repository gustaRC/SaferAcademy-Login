const inputPassword = document.getElementById("password")
const showPassword = document.getElementById("showP")

export function changeInput(ev) {
    ev.preventDefault()
    if (inputPassword.type == "password") {
        inputPassword.type = "text"
        showPassword.src = "../img/icons/viewOFF.png"
    } else {
        inputPassword.type = "password"
        showPassword.src = "../img/icons/viewON.png"
    }
}