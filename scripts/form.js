const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_w1f69za';

  

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Successfully Send');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});