function save() {
    localStorage.name = document.getElementById("name").value;
    localStorage.lastName = document.getElementById("lastName").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.age = document.getElementById("age").value;
    localStorage.gender = document.getElementById("gender").value;
}

function show() {
    document.getElementById("name").value = localStorage.name;
    document.getElementById("lastName").value = localStorage.lastName;
    document.getElementById("email").value = localStorage.email;
    document.getElementById("age").value = localStorage.age;
    document.getElementById("gender").value = localStorage.gender;
}