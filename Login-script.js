document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "D3c23admin") {
        window.location.href = "Admin/index.html";
    } else if (username === "zalan" && password === "ZaxZax") {
        window.location.href = "Users/zalan.html";
    } else if (username === "zsoltbotyanszki" && password === "19810105") {
        window.location.href = "Users/bozso.html";
    } else if (username === "NimY" && password === "NimYvok111") {
        window.location.href = "Users/nimrod.html";
    } else {
        errorMessage.textContent = "Hibás felhasználónév vagy jelszó.";
    }
});
