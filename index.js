const express = require('express');

const app = express();


app.listen(3000, () => console.log('servidor rodando na porta 3000 fera'));

app.get('/atendimento', (req, res) => res.send('Você está na rota de atendimento'));
