let captcha;

function genrate() {
    document.querySelector("#submit").value = "";
    captcha = document.querySelector("#image");
    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 6; i++) {
        uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document.querySelector("#submit").value;
    if (usr_input == captcha.innerHTML) {
        let s = document.querySelector("#key").innerHTML = "Соответствует";
        genrate();
    }
    else {
        let s = document.querySelector("#key").innerHTML = "не соответствует";
        genrate();
    }
}