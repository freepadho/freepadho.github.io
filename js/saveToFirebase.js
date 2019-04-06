function saveToFirebase() {

    email = document.getElementById('InputEmail').value;

    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            //success(); // some success method
            document.getElementById('success').className = "alert alert-success";
            document.getElementById('success').innerHTML = "Submitted successfuly!";
        }, function(error) {
            document.getElementById('success').className = "alert alert-danger";
            document.getElementById('success').innerHTML = "Something went wrong!";
            console.log('error' + error);
            //error(); // some error method
        });

    return false;
}
//$("#saveToFirebase").bind("click",saveToFirebase);
function init(){
    document.getElementById('new-form').onsubmit = saveToFirebase;
}
window.onload = init;

