import "./style.css";

import { users } from "./store";

let signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameField = e.target.elements.name;
  let emailField = document.getElementById("email");
  let passwordField = document.querySelector("#password");
  let confirmPasswordField = document.querySelector("#confirm-password");

  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let confirmPasswordError = document.getElementById("confirm-password-error");

  let name = nameField.value;
  let email = emailField.value;
  let password = passwordField.value;
  let confirmPassword = confirmPasswordField.value;

  let hasError = false;

  // validation
  if (!name) {
    nameError.innerText = "Name is empty";

    hasError = true;
  } else {
    nameError.innerText = "";
  }

  if (!email) {
    emailError.innerText = "Email is empty";

    hasError = true;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email)) {
    emailError.innerText = "Email is not valid";

    hasError = true;
  } else if (users.find((user) => user.email === email)) {
    emailError.innerText = "Email already registered";

    hasError = true;
  } else {
    emailError.innerText = "";
  }

  if (!password) {
    passwordError.innerText = "Password is empty";

    hasError = true;
  } else {
    passwordError.innerText = "";
  }

  if (!confirmPassword) {
    confirmPasswordError.innerText = "Confirm Password is empty";

    hasError = true;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Password doesn't match";

    hasError = true;
  } else {
    confirmPasswordError.innerText = "";
  }

  if (hasError) {
    return;
  }

  users.push({
    name,
    email,
    password
  });

  console.log("Sign up success");

  // resets the form
  e.target.reset();
});
