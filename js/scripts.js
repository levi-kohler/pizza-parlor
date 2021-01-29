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