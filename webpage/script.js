// LOGIN
function checkLogin() {
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
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

    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("profilePopup").style.display = "block";
    document.getElementById("studentName").innerHTML = name;
    document.getElementById("courseName").innerHTML = "Course: " + course;

    list = document.getElementById("skillList");
    list.innerHTML = "";

    for (i = 0; i < skills.length; i++) {
        li = document.createElement("li");
        li.innerHTML = skills[i];
        list.appendChild(li);
    }
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("profilePopup").style.display = "none";
}


