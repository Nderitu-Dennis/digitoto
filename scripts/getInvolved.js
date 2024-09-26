
function validateForm() {
    var name = document.forms["involvementForm"]["name"].value;
    var email = document.forms["involvementForm"]["email"].value;
    if (name == "" || email == "") {
        alert("Name and Email must be filled out.");
        return false;
    }
    return true;
}
