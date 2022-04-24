const supertest = require("supertest")

const app = require("../src/app")

const request = supertest(app)

it("Should return purple as favourite colour of Gabriel", function() {

  return request
    .get("/colour/gabriel")
    .then(result => {
      /**
       * Podes colocar vários assertions num mesmo teste
       */
      expect(result.statusCode).toEqual(200)
      expect(result.body.colour).toEqual("purple")
    })

})

it("Should run application in port 3000", function() {

  return request
    .get("/")
    .then(result => {
      expect(result.statusCode).toEqual(200)
    })

})

// it("Should get route with status code 200", async function() {

  /**
   * Quando trabalhando com promises tenha certeza de estar utilizando o return.
   * Caso não utilize, o teste sempre passará mas sem qualquer verificação.
   * Assim, o teste não terá validade nenhuma sem o return.
   */

  /*
  return request
    .get("/")
    .then(res => expect(res.statusCode).toEqual(200))
  */

  /**
   * Outra alternativa seria utilizar o async await
   */

//   let results = await request.get("/")

//   expect(results.statusCode).toEqual(200)

// })

