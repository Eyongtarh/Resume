function sendMail(form) {
  const name = form.name.value;

  emailjs
    .send("service_7tybh4n", "template_nycydzn", {
      name: name,
      email: form.emailaddress.value,
      title: form.projectsummary.value,
    })
    .then(
      function () {
        const msg = document.getElementById("form-message");
        msg.className = "alert alert-success";
        msg.innerHTML = `Thank you <strong>${name}</strong>! Your message has been sent successfully. We’ll get back to you shortly.`;
        msg.style.display = "block";
        form.reset();
      },
      function () {
        const msg = document.getElementById("form-message");
        msg.className = "alert alert-danger";
        msg.innerHTML = "Oops! Something went wrong. Please try again.";
        msg.style.display = "block";
      }
    );

  return false;
}
