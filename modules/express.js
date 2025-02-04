const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World! com express</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Dione",
      email: "dione@compact.jr",
    },
    {
      name: "Paola",
      email: "paola@odonter.ufsm",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
