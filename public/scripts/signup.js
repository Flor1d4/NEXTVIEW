document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    const data = await response.json();
    const msg = document.getElementById("signup-message");
  
    if (response.ok) {
      msg.textContent = "Registration successful! You can now log in.";
      e.target.reset();
      closePopup("signup-popup");
      openPopup("login-popup");
    } else {
      msg.textContent = data.error || "Something went wrong.";
      msg.style.color = "red";
    }
  });
  