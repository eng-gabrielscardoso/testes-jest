const calculator = require("../example/calculator")

describe("Basic operations", function() {

  it("Should return the value 10 when pass args 5 and 5", function() {
  
    let resuts = calculator.sum(5, 5)
  
    expect(resuts).toEqual(10)
  
  })
  
  it("Should return the value 10 when pass args 2 and 5", function() {
  
    let results = calculator.mult(2, 5)
  
    expect(results).toEqual(10)
  
  })

})
