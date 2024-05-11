let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSelection = document.querySelector(".form-section");

signup.addEventListener("click", () =>{
    slider.classList.add("moveslider");
    formSelection.classList.add("form-section-move");
    // Mudando a cor da fonte quando o slide muda para o botão de registro
    login.style.color = "black"; // Cor da fonte para o botão de login
    signup.style.color = "white"; // Cor da fonte para o botão de registro
});

login.addEventListener("click", () =>{
    slider.classList.remove("moveslider");
    formSelection.classList.remove("form-section-move");
    // Mudando a cor da fonte quando o slide muda para o botão de login
    login.style.color = "white"; // Cor da fonte para o botão de login
    signup.style.color = "black"; // Cor da fonte para o botão de registro
});

const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const errorDisplay = document.getElementById("errorDisplay");

submitButton.addEventListener("click", function() {
    const email = emailInput.value.trim();

    // Verifica se o campo de e-mail está vazio
    if (email === "") {
        showError("Por favor, insira seu e-mail.");
        return;
    }

    // Valida o formato do e-mail usando uma expressão regular simples
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("Por favor, insira um e-mail válido.");
        return;
    }

    // Se passar pelas validações, limpa a mensagem de erro e faz algo com o e-mail (por exemplo, enviar para o servidor)
    errorDisplay.textContent = "";
    // Aqui você pode fazer algo com o e-mail, como enviar para o servidor
    console.log("E-mail válido:", email);
});

function showError(message) {
    errorDisplay.textContent = message;
}
