// Business Logic
function Pizza(size, cheese, topping) {
  this.size = size
  this.cheese = cheese
  this.topping = topping
}

Pizza.prototype.totalPrice = function() {
  let sumPrice = (this.size = this.cheese = this.topping)
  return sumPrice
}
// UI Logic