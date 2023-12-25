function sendMail() {
    var params = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        plan: document.getElementById("formPlan").value,
        message: document.getElementById("formMessage").value,
    };
  
    const serviceID = "service_gimdy83";
    const templateID = "template_1wcdc4e";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  