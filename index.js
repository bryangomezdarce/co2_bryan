const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { getUser } = require("./services/bigquery");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await getUser(username);

  if (user && bcrypt.compareSync(password, user.password)) {
    res.send({ message: "Login successful", user: user.username });
  } else {
    res.status(401).send({ message: "Invalid username or password" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchado en http://localhost:${port}`);
});