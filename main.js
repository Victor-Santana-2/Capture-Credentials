const passField = document.querySelector("input");
const showBtn = document.querySelector("span i");

showBtn.onclick = () => {
    if (passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("hide-btn");
    } else {
        passField.type = "password";
        showBtn.classList.remove("hide-btn");
    }
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    // Monta o corpo do e-mail
    let corpoEmail = `Nome: ${nome}\nE-mail: ${email}`;

    // Abre o cliente de e-mail do usuário com os dados preenchidos
    window.location.href = `mailto:seuemail@example.com?subject=Contato&body=${encodeURIComponent(corpoEmail)}`;
});

};
