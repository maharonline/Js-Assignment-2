//Clear-btn-1
document.getElementById("clear-btn1").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
}
//Clear-btn-2
document.getElementById("clear-btn2").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}


//concatination
document.getElementById("btn-1").onclick = function () {
    let num1 = prompt("Enter Your 1st String Number")
    let num2 = prompt("Enter Your 2nd String Number")
    let msg = num1 + num2
    let msg1 = num1 + "+" + num2

    document.getElementById("Statement").innerHTML = msg1;
    document.getElementById("Output").innerHTML = msg;
}
//Name From User
document.getElementById("btn-2").onclick = function () {
    let naam = prompt("Enter your Name:");
    document.getElementById("Statement").innerHTML = naam;
}

//Comparison Operator
document.getElementById("btn-3").onclick = function () {
    let num = prompt("Enter Number '1 to 100' ")
    let num1 = "Total Number=" + num;
    var msg = "";
    if (num > 80) {
        msg = "Grade A+"
    }
    else if (num >= 69) {
        msg = "Grade B"
    }
    else if (num > 59) {
        msg = "Grade C"
    }
    else if (num > 41) {
        msg = "Grade D"
    }
    else if (num <= 40) {
        msg = "Grade F"
    }
    document.getElementById("Statement").innerHTML = num1;
    document.getElementById("Output").innerHTML = msg;

}

//if else
document.getElementById("btn-4").onclick = function () {
    let num = prompt("Enter Number '1 to 100' ")
    let num1 = "Total Number=" + num;
    var msg = "";
    if (num > 80) {
        msg = "Grade A+"
    }
    else if (num >= 69) {
        msg = "Grade B"
    }
    else if (num > 59) {
        msg = "Grade C"
    }
    else if (num > 41) {
        msg = "Grade D"
    }
    else if (num <= 40) {
        msg = "Grade F"
    }
    document.getElementById("Statement").innerHTML = num1;
    document.getElementById("Output").innerHTML = msg;

}
//Testing Condition
document.getElementById("btn-5").onclick = function () {
    let age = prompt("Enter Age: ")
    let Weight = prompt("Enter Weight: ")
    let num1 = "Age=" + age + "Years" + "&" + "Weight=" + Weight;
    var msg = "";
    if (Weight <= 100) {
        msg = "You Are Fatty Boy"
    }
    else if (Weight <= 50) {
        msg = "You Are Handsome Boy"
    }

    else {
        msg = "Try Again";
    }
    document.getElementById("Statement").innerHTML = num1;
    document.getElementById("Output").innerHTML = msg;

}
// Nested If
document.getElementById("btn-6").onclick = function () {
    var msg = ""
    let skill = prompt("Enter Your Skill:")
    if (skill === "Js") {
        let experience = prompt("Enter Your Experience:")
        if (experience === "3Year") {
            let place = prompt("Enter Your Location:")
            if (place === "Faisalabad") {
                msg = "You Are Hired!"
            }
            else {
                msg = "You Are Not Eligible"
            }
        }
        else {
            msg = "Humy sirf 3 saal experience wla hi banda chaiye"
        }
    }
    else {
        msg = "Humy sirf Javascript wla hi banda chaiye"
    }
    document.getElementById("Output").innerHTML = msg;
}

//LOgin
document.getElementById("btn-7").onclick=function(){
    let msg="";
    let username=prompt("Enter Your Username");
    if(username==="hamza"){
        let password=+prompt("Enter Your Password:")
        if(password===123){
            alert("You Are Successfully Login")
            msg="You Are Successfully Login"
        }
        else{
            msg="Password is 123"
        }
    }
    else{
        msg="username is hamza"
    }
document.getElementById("Output").innerHTML = msg;
}