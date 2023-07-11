import { nextImage } from "./slideImgs.js";
import { changeInput } from "./changeInputPassword.js";

setInterval( function() {
    nextImage();
}, 4000)

const showPassword = document.getElementById("showP")
showPassword.addEventListener("click", changeInput)


