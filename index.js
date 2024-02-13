// Adiciona um evento de clique ao botão de alternância de tema
document.getElementById("toggle-theme").addEventListener("click", function() {
    // Seleciona o elemento body
    var body = document.body;

    // Verifica se o tema atual é claro
    if (body.classList.contains("light-theme")) {
        // Alterna para o tema escuro
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        // Atualiza o texto do botão
        this.textContent = "Clear Mode";
    } else {
        // Alterna para o tema claro
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        // Atualiza o texto do botão
        this.textContent = "Dark Mode";
    }
});

// Adiciona um evento de clique ao elemento com id "email-link"
// Adiciona um evento de clique ao elemento com id "email-link"
document.getElementById("email-link").addEventListener("click", function() {
    // Define o link do Gmail
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=tomas.g.mateus@gmail.com";
    
    // Abre uma nova janela ou aba com o link do Gmail
    window.open(gmailLink);
});

