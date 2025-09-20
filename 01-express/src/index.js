import "dotenv/config";
console.log("Hello, World!!");
console.log("Hello, World  Enio !!");
console.log(process.env.MYSECRETS);

const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET /ramdom que retorna um número inteiro aleatório
app.get('/ramdom', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 1000000); // De 0 até 999999
    res.json({ number: randomNumber });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
