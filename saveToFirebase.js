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

    return false;
}
//$("#saveToFirebase").bind("click",saveToFirebase);
function init(){
    document.getElementById('email_form').onsubmit = saveToFirebase;
}
window.onload = init;

