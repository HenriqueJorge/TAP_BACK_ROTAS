const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORTA = 3000;

app.use(morgan('short'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/auth',require('./controller/autorizacao'))
app.use('/produto' , require('./controller/produtoController'))

app.get('*' ,(req,res) => res.send('404'))

app.listen(PORTA , () => {console.log("App em execução na porta " + PORTA)});