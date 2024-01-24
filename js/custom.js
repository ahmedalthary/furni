var sitePlusMinus = function () {
  var value,
    quantity = document.getElementsByClassName("quantity-container");

  function createBindings(quantityContainer) {
    var quantityAmount =
      quantityContainer.getElementsByClassName("quantity-amount")[0];
    var increase = quantityContainer.getElementsByClassName("increase")[0];
    var decrease = quantityContainer.getElementsByClassName("decrease")[0];
    increase.addEventListener("click", function (e) {
      increaseValue(e, quantityAmount);
    });
    decrease.addEventListener("click", function (e) {
      decreaseValue(e, quantityAmount);
    });
  }

  function init() {
    for (var i = 0; i < quantity.length; i++) {
      createBindings(quantity[i]);
    }
  }

  function increaseValue(event, quantityAmount) {
    value = parseInt(quantityAmount.value, 10);

    console.log(quantityAmount, quantityAmount.value);

    value = isNaN(value) ? 0 : value;
    value++;
    quantityAmount.value = value;
  }

  function decreaseValue(event, quantityAmount) {
    value = parseInt(quantityAmount.value, 10);

    value = isNaN(value) ? 0 : value;
    if (value > 0) value--;

    quantityAmount.value = value;
  }

  init();
};
sitePlusMinus();
// // Toggle navbar
let togglerBtn = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".custom-navbar-collapse");
togglerBtn.addEventListener("click", () => {
  navbarCollapse.classList.toggle("collapsed");
});

// Login Signup Form
function toggleSignup() {
  document.getElementById("login-toggle").style.backgroundColor = "#fff";
  document.getElementById("login-toggle").style.color = "#2f2f2f";
  document.getElementById("signup-toggle").style.backgroundColor = "#3B5D50";
  document.getElementById("signup-toggle").style.color = "#fff";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
  document.getElementById("login-toggle").style.backgroundColor = "#3B5D50";
  document.getElementById("login-toggle").style.color = "#fff";
  document.getElementById("signup-toggle").style.backgroundColor = "#fff";
  document.getElementById("signup-toggle").style.color = "#2f2f2f";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}