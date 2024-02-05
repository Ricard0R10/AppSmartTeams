const express = require('express');
const fileProcessor = require('../utils/fileProcessor');
const Territorio = require('../models/territorio');
const router = express.Router();

// Middleware para upload de arquivos (se necessário)
const fileUpload = require('express-fileupload');
router.use(fileUpload());

// Mostrar a página de administração
router.get('/', async (req, res) => {
    try {
        const territorios = await Territorio.fetchAll(); // Supondo que fetchAll é um método implementado
        res.render('admin', { territorios });
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao carregar a página de administração.");
    }
});

// Processar o upload de arquivo
router.post('/upload_territorio', async (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    try {
        // 'file' é o nome do campo no formulário de upload
        await fileProcessor.processFile(req.files.file.tempFilePath); 
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao processar arquivo');
    }
});

module.exports = router;
