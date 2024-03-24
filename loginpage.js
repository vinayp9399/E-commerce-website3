function submit1(){
    var fname = document.getElementById('fname');
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mob_no = document.getElementById("mob_no").value;

    expression_fname = /^[a-z A-Z]{2,15}$/;
    expression_lname = /^[a-z A-Z]{2,15}$/;
    expression_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    expression_email = /^[a-z A-Z _ 0-9]+@[a-z A-Z]+\.[a-z A-Z]{2,5}$/;
    expression_mob_no = /^[0-9]{10}$/;
    // if(String(fname).match(expression_fname)){
    //     console.log("True")
    // }else{
    //     document.getElementById("fname_error").innerHTML= "Invalid name!";
    // }
    String(fname).match(expression_fname)? document.getElementById("fname_error").innerHTML= "":document.getElementById("fname_error").innerHTML= "Invalid name!";
    String(lname).match(expression_lname)? document.getElementById("lname_error").innerHTML= "":document.getElementById("lname_error").innerHTML= "Invalid name!";
    String(password).match(expression_password)? document.getElementById("password_error").innerHTML= "":document.getElementById("password_error").innerHTML= "Invalid password!";
    String(email).match(expression_email)? document.getElementById("email_error").innerHTML= "":document.getElementById("email_error").innerHTML= "Invalid email!";
    String(mob_no).match(expression_mob_no)? document.getElementById("mob_no_error").innerHTML= "":document.getElementById("mob_no_error").innerHTML= "Invalid mobile number!";


}
