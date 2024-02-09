function sendMail() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var res = document.querySelector(".res h4");
   
    // var html =` <h4>Thanks For responding We will get back to you within 24hours</h4>`;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "dwarkashiconsender@gmail.com",
        Password : "Dwarkashi123",
        To: 'dwarkashiconsultancy@gmail.com',
        From: "dwarkashiconsender@gmail.com",
        Subject: subject.value,
        Body: `<b>Name:</b>&nbsp;&nbsp; ${name.value} <br>
        <b>Email:</b> &nbsp;&nbsp;${email.value}  <br>
        <b>Message:</b>&nbsp;&nbsp;${message.value}`
    }).then(
        message => {
            if (message == 'OK') {
                res.style.display="block";
                setInterval(() => {
                  res.style.display="none";
              }, 4000); 
            } else {
                alert('Your message is not send try again few minutes late');
            }
        }
    );
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}