import e, { NextFunction, Request, Response } from "express";
//import UserModel from "../models/User.Modal";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const port: number = 8080;
const app = e();

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World! com express</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "DioneWithExpress",
      email: "dione@compact.jr",
    },
    {
      name: "Paola",
      email: "paola@odonter.ufsm",
    },
  ];

  res.status(200).json(users);
});

// esta variável port foi declarada no arquivo http.ts
app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
