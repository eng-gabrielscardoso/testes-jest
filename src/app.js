const express = require("express")

const app = express()

app.get("/", async (req, res, next) => {
  await res.json({ success: true })
})

app.get("/colour/:person", async (req, res, next) => {
  let person = req.params.person

  if (person === "gabriel") res.json({ colour: "purple" })
})

module.exports = app;
