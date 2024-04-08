document.getElementById("calculateBtn").addEventListener("click", validateAndCalculateAge);

function validateAndCalculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    
    if (dobDate > today) {
        document.getElementById("result").innerText = "Invalid date selected";
        return;
    }

    calculateAge(dobDate, today);
}

function calculateAge(dobDate, today) {
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    var dayDiff = today.getDate() - dobDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
        var months = (12 - dobDate.getMonth()) + today.getMonth();
    } else {
        var months = today.getMonth() - dobDate.getMonth();
    }
    
    var days = today.getDate() - dobDate.getDate();
    if (days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = lastMonth.getDate() + days;
    }
    
    var ageString = age + " years";
    if (months > 0) {
        ageString += " and " + months + " months";
    }
    if (days > 0) {
        ageString += " and " + days + " days";
    }
    
    document.getElementById("result").innerText = "You are " + ageString + " old.";
}
