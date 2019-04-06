function saveToFirebase() {

    email = document.getElementById('email').value;

    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            ;//success(); // some success method
        }, function(error) {
            console.log('error' + error);
            //error(); // some error method
        });
}
//$("#saveToFirebase").bind("click",saveToFirebase);
var form = document.getElementById("email_form");
if(form.addEventListener){
    form.addEventListener("submit", saveToFirebase, false);
} else if(form.attachEvent){
    form.attachEvent('onsubmit', saveToFirebase);
}

