// <!-- Question 1 -->

// let mainContent = document.querySelector("#main-content");
// let render = document.querySelectorAll(".render");
// let firstName = document.querySelector("#first-name");
// let lastName = document.querySelector("#last-name");
// let email = document.querySelector("#email");

// let child = mainContent.children;

// render.forEach( (element) => {
// console.log(element.innerHTML);
// });

//  firstName.value = "Azka";
//  lastName.value = "Ansari";
//  email.value = "azkaansari@7gmil.com";
// console.log(firstName.value);
// console.log(lastName.value);
// console.log(email.value);


// <!-- Question 2 -->
let mainContent = document.querySelector("#main-content");

let child = mainContent.children;

let render = document.querySelectorAll(".render");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");

firstName.value = "Azka";
lastName.value = "Ansari";
email.value = "azkaansari@gmail.com";

render[0].innerHTML = "First Name : " + firstName.value;
render[1].innerHTML = "Last Name : " + lastName.value;
render[2].innerHTML = "Email : " + email.value;


