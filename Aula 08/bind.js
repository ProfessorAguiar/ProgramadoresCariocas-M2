const bind = {
  x: 42,
  getX: function() {
    return this.x
  }
}
//console.log(bind.getX())
const unboundGetX = bind.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(bind);
console.log(boundGetX());
// expected output: 42
