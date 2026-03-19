// seleciona o formulário pelo ID
const form = document.getElementById.getElementById("formCotato")

// Adiciona evento de envio
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão
    alert("Mensagem enviada com sucesso!"); // Exibe alerta
    form.reset(); // Limpa os campos do formulário
});
