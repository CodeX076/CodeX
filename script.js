document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Mock authentication
    if (username === "admin" && password === "admin123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials! Please try again.");
    }
  });