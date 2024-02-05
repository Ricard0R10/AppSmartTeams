const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path'); // Importe o módulo 'path'

app.use(express.static(__dirname)); // Configure o Express para servir arquivos estáticos na pasta atual (__dirname)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

// Roteadores
const indexRouter = require('./routes/index');
const feedbackRouter = require('./routes/feedback');
const adminRouter = require('./routes/admin');

app.use('/', indexRouter);
app.use('/feedback', feedbackRouter);
app.use('/admin', adminRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

require('dotenv').config();
