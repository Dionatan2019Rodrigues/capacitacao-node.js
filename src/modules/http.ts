import htttp from "http";

const port: number = 8080;

interface User {
  name: string;
  email: string;
}

const server = htttp.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Home page</h1>");
  }
  if (req.url === "/users") {
    const users: User[] = [
      {
        name: "Dione",
        email: "dione@compact.jr",
      },
      {
        name: "Paola",
        email: "paola@odonter.ufsm",
      },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}!`));
