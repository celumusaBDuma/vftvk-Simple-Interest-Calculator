// Get the current value of the rate field and updates it as it changes
function updateRate() {
    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval + "%";
}

function compute() {
    
    var principal = document.getElementById("principal").value;
    
    // check if principal is 0 or negative, if so propmt the user to enter positive numbers
    if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    // gets all the relevant data and assign them to respective fields
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculates the interest
    var interest = principal * years * rate /100;

    // calculates the year the investment will be done at
    var year = new Date().getFullYear() + parseInt(years);
    
    document.getElementById("result").innerHTML = "<br>if you deposit <mark>" + principal
                     + "</mark>,<br> at an interest rate of <mark>" + rate
                     + "%</mark>.<br>You will receive an amount of <mark>" + interest
                     + "</mark>, <br>in the year <mark>" + year + "</mark>";
    console.log(interest);
    
}