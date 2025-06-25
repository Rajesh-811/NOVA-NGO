//email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//subscribe 
var email_body = document.getElementById("email_sub_body");
var email_foot = document.getElementById("email_sub_foot");
var src = document.getElementById("source");
var temp;


function sub(email,e){
    console.log("Hello")
    const date = new Date(Date.now());
    e.preventDefault();
    if(isValidEmail(email.value)){
        alert("Please wait!")
        temp=email.value;
        email.value=""
        emailjs.send("service_9oip9y9", "template_0kc0ynr", {
            email:temp,
            source:src.value,
            time:date.toString()
        })
        .then(() => {
            alert("Message sent successfully!");
            
        }, (error) => {
            alert("Failed to send message: " + error.text);
        });
    }
    else{
        alert("Enter a valid email!");
    }
}
document.getElementById("subscribe_body").addEventListener("click", function (e) {
    sub(email_body,e)
});
if(document.getElementById("subscribe_foot")){
    document.getElementById("subscribe_foot").addEventListener("click", function (e) {
        sub(email_foot,e)
    });
}
