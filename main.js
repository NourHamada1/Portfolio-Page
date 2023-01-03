// const form = document.getElementById("forms");
// const userName = document.getElementById("userName");
// const email = document.getElementById("Email");
// const phone = document.getElementById("phoneNumber");
// const message = document.getElementById("message");

// form.addEventListener("submit", (e) => {
//     if(userName.value.)
// });

// const Error = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };

// const Success = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
// };

// const isValidEmail = (email) => {
//   const ema =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return ema.test(String(email).toLowerCase());
// };

// const ValiditeInputs = () => {
//   const userNameValue = userName.value.trim();
//   const emailValue = email.value.trim();
//   const phoneValue = phone.value.trim();
//   const messageValue = message.value.trim();

//   if (userNameValue === "") {
//     Error(userName, "Username is required");
//   } else {
//     Success(userName);
//   }

//   if (emailValue === "") {
//     Error(email, "Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     Error(email, "Enter A Valid E-mail Addres");
//   } else {
//     Success(email);
//   }
// };
