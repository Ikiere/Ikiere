function emailSend(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "services.zerocoded@gmail.com",
        Password : "Fathergod@123",
        To : 'esoweibi@gmail.com',
        From : "services.zerocoded@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}