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
        alert_sub("Please wait!","warning")
        temp=email.value;
        email.value=""
        emailjs.send("service_9oip9y9", "template_0kc0ynr", {
            email:temp,
            source:src.value,
            time:date.toString()
        })
        .then(() => {
            alert_sub("Message sent successfully!","success");
        }, (error) => {
            alert_sub("Failed to send message: " + error.text,"error");
        });
    }
    else{
        alert_sub("Enter a valid email!","error");
        // alert("Enter a valid email!");
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

function alert_sub(alertName,mode){
    const alertBox = document.getElementById('alertBox');
    alertBox.innerHTML=alertName;
    if(mode=="error"){
        alertBox.style.background="rgba(244, 20, 20, 0.68)";
    }
    else if(mode=="warning"){
        alertBox.style.background="rgba(202, 241, 45, 0.87)";
    }
    else if(mode=="success"){
        alertBox.style.background='rgba(71, 141, 71, 0.68)';
    }
    // Show alert
    alertBox.classList.remove('hidden');

    // Slide out and hide after 3 seconds
    setTimeout(() => {
    alertBox.classList.add('slide-out');

    // Remove from DOM or fully hide after animation
    setTimeout(() => {
        alertBox.classList.add('hidden');
        alertBox.classList.remove('slide-out');
    }, 400); // Match slide-out duration
    }, 6000);

}