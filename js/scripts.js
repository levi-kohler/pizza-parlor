// Business Logic
function Pizza(size, cheese, meat, veggie) {
  this.size = size
  this.cheese = cheese
  this.meat = meat
  this.veggie
}

Pizza.prototype.totalPrice = function() {
  let sumPrice = (this.size + this.cheese + this.meat + this.veggie)
  return sumPrice
}

// UI Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#sizePrice").val());
    let cheese = parseInt($("#cheesePrice").val());
    let meat = parseInt($("#meatPrice").val());
    let veggie = parseInt($("#veggiePrice").val());
    let pizzaPrice = new Pizza(size,cheese,meat,veggie);
    $("#show-price").show
    $("#show-price").text(pizzaPrice.totalPrice());
  })
})