function registerMe(){
    var registerUser = new XMLHttpRequest(); 
    
    registerUser.open("POST", "http://localhost:8080/members", true);
    registerUser.setRequestHeader("Content-Type","application/json");
    registerUser.onload=function(){
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }


var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var payload = {username:username, password:password}
registerUser.send(JSON.stringify(payload));
}