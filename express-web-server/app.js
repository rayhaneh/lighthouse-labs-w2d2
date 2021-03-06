// This file holds the express server setup
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080 // default port 8080

app.set('view engine', 'ejs')


var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
}

app.get("/", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n")
})

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase)
})

app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})