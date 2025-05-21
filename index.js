const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 

function gerarFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

app.get('/', (req, res) => {
    const sequencia = gerarFibonacci(20);
    res.render('home', { sequencia });
});

app.listen(port, () => {
    console.log;
});