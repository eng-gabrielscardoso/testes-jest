const app = require("./app")

app.listen(process.env.PORT || 3000, async function () {
  try {
    await console.log("Running application")
  } catch(e) {
    await console.log(`An error occurred. ${e}`)
  }
})
