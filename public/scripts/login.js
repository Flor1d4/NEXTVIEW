document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    const msg = document.getElementById("login-message");
  
    if (response.ok) {
      msg.textContent = "Login successful! Redirecting...";
      localStorage.setItem("nextview_user", JSON.stringify(data.user));
      setTimeout(() => {
        window.location.href = "account.html";
      }, 1500);
    } else {
      msg.textContent = data.error || "Invalid login.";
      msg.style.color = "red";
    }
  });
  