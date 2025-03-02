document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (email === "botyanszki.zeteny@gmail.com" && password === "D3c23admin") {
        window.location.href = "admin.html";
    } else if (email === "z.botynszki@yahoo.com" && password === "private") {
        window.location.href = "index2.html";
    } else {
        errorMessage.textContent = "Hibás e-mail cím vagy jelszó.";
    }
});
