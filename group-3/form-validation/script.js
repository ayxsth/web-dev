const signUpForm = document.getElementById("sign-up");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const confirmPasswordError = document.querySelector(
    "#confirm-password-error"
  );

  let hasError = false;

  if (!name) {
    nameError.innerText = "Name is required.";

    hasError = true;
  } else {
    nameError.innerText = "";
  }

  if (!email) {
    emailError.innerText = "Email is required.";

    hasError = true;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email)) {
    emailError.innerText = "Email is not valid.";

    hasError = true;
  } else {
    emailError.innerText = "";
  }

  if (!password) {
    passwordError.innerText = "Password is required.";

    hasError = true;
  } else {
    passwordError.innerText = "";
  }

  if (!confirmPassword) {
    confirmPasswordError.innerText = "Confirm password is required.";

    hasError = true;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Password don't match.";

    hasError = true;
  } else {
    confirmPasswordError.innerText = "";
  }

  if (hasError) {
    return;
  }

  console.log({
    name,
    email,
    password,
    confirmPassword
  });
});
