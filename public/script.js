// Validation from login page

async function validate(event) {
  event.preventDefault();

  // Retrieve the input values
  const username = document.getElementById("lgUsername").value;
  const password = document.getElementById("lgPassword").value;

  // Prepare the data to be sent to the server
  const formData = {
    username,
    password,
  };

  try {
    const response = await fetch("http://localhost:3000/users/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
      window.location.href = "./source/choosePage.html";
    } else {
      console.error("Login failed:", response.statusText);
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
function goToRegister() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none";
  const registerForm = document.getElementById("registerForm");
  registerForm.style.display = "block";
}
async function register(event) {
  event.preventDefault();
  console.log("register start");
  const username = document.getElementById("rgUsername").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  console.log(email);
  const password = document.getElementById("rgPassword").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  // Prepare the data to be sent to the server
  const formData = {
    username,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  };

  try {
    const response = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
      window.location.href = "./source/choosePage.html";
    } else {
      console.error("Registration failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
}

function backToLogin() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = "block";
  const registerForm = document.getElementById("registerForm");
  registerForm.style.display = "none";
}
