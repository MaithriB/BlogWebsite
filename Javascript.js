function validateForm(){
 var firstName = document.forms["MyForm"]["firstName"].value;
 if(firstName == null || firstName == ""){
    alert("First name is required");
    return false;
}
 if(firstName.length < 3){
    alert("First name must have atleast 3 characters");
    return false;
 }    
 var lastName = document.forms["MyForm"]["lastName"].value;
 if(lastName == null || lastName == ""){
    alert("Last name is required");
    return false;
}
var email = document.forms["MyForm"]["email"].value;
 if(email == null || email == ""){
    alert("Email Id is required");
    return false;
}
var age = document.forms["MyForm"]["age"].value;
 if(age == null || age == ""){
    alert("Age is required");
    return false;
}
var message = document.forms["MyForm"]["message"].value;
 if(message == null || message == ""){
    alert("Message is required");
    return false;
}
}
