$(document).ready(function () {

    var token = sessionStorage.getItem("token");
    if (token != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#logoutMenu').show();
        $('#editMenu').show();
    }else{
        window.location.href="http://localhost:8080/index.html";
    }
})