const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));


function gerarFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}


app.get('/', (request, response) => {
    const sequencia = gerarFibonacci(20);
    response.render('home', { sequencia });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});