function Login() {
    var correo = document.getElementById("txtCorreo").value;
    var password = document.getElementById("txtPassword").value;

    if (correo === 'ejemplo@gmail.com' && password === '123456') {
        window.location.replace("/home/HtmlHome1.html");
    }    
    else {
        var element = document.getElementById("divError");
        element.classList.remove("oculto");
        element.classList.add("visible");
    }
   

}