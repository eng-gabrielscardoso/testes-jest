const app = require("../app")

it("Should return the value 10 when pass args 5 and 5", function() {

  let resuts = app.sum(5, 5)

  expect(resuts).toEqual(10)

})

it("Should return the value 10 when pass args 2 and 5", function() {

  let results = app.mult(2, 5)

  expect(results).toEqual(10)
  
})
