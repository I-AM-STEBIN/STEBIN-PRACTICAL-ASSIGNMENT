// LOGIN
function checkLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user === "admin" && pass === "12345") {
        window.location.href = "index.html";
        return false;
    } else {
        alert("Invalid Username or Password");
        return false;
    }
}

// DETAILS

function showProfile(name, course, skills) {
    document.getElementById("profileBox").style.display = "block";

    document.getElementById("studentName").innerHTML = name;
    document.getElementById("courseName").innerHTML = "Course: " + course;

    var list = document.getElementById("skillList");
    list.innerHTML = "";

    for (var i = 0; i < skills.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = skills[i];
        list.appendChild(li);
    }
}


