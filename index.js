const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const { general } = require("./router/general");
const { auth_users } = require("./router/auth_users");

const app = express();

app.use(bodyParser.json());

app.use(
  session({
    secret: "book-review-secret",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/", general);
app.use("/customer", auth_users);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});