import fs from "fs";
import path from "path";

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    return console.log("Erro: ", err);
  }
  console.log("Pasta criada com sucesso");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node!",
  (err) => {
    if (err) {
      return console.log("Erro: ", err);
    }
    console.log("Arquivo criado com sucesso");

    // Adicionar texto à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello add",
      (err) => {
        if (err) return console.log("Erro: ", err);
        console.log("Texto Adicionado com sucesso");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (err, data) => {
        if (err) console.log("Erro: ", err);
        console.log(data);
      }
    );
  }
);
