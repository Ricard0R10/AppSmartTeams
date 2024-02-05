// routes/feedback.js
const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

// Mostrar o formulário de feedback
router.get('/', (req, res) => {
    // Aqui, você pode adicionar lógica para enviar dados adicionais para o formulário, se necessário
    res.render('feedback');
});

// Processar o formulário de feedback
router.post('/', async (req, res) => {
    // Criar um novo Feedback com os dados do formulário
    const feedback = new Feedback({
        nome_cliente: req.body.nome_cliente,
        operadora: req.body.operadora,
        tipo_servico: req.body.tipoServico,
        telemovel_extra: req.body.telemovelExtra,
        telemovel_fatura: req.body.telemovelFatura,
        dados_moveis: req.body.dadosMoveis,
        valor_mensal_extra: req.body.valorMensalExtra,
        velocidade_net: req.body.velocidadeNet,
        valor_mensalidade: req.body.valorMensalidade,
        fidelizado: req.body.fidelizado === 'sim',
        data_termino_fidelizacao: req.body.dataTermino,
        valor_incumprimento: req.body.valorIncumprimento,
        motivo_mudanca_operadora: req.body.motivoMudanca,
        outra_motivacao: req.body.outraMotivacao,
        canais_premium: req.body.canaisPremium,
        cinema_frequencia: req.body.cinemaFrequencia,
        fornecedor_energia: req.body.fornecedorEnergia,
        qual_fornecedor_energia: req.body.qualFornecedorEnergia,
        opcao_sem_servico: req.body.opcaoSemServico,
        outra_opcao_sem_servico: req.body.outraOpcaoSemServico,
        solucao_seguranca: req.body.solucaoSeguranca,
        valor_mensal_seguranca: req.body.valorMensalSeg,
        fidelizado_seguranca: req.body.fidelizadoSeg === 'sim',
        data_termino_fidelizacao_seguranca: req.body.dataTerminoSeg,
        pensou_seguranca: req.body.pensouSeguranca === 'Sim',
        ligacao_smartphone: req.body.ligacaoSmartphone === 'Sim',
        motivo_seguranca: req.body.motivoSeguranca,
        contato: req.body.contato,
        email: req.body.email,
        autoriza_validacao: req.body.autorizaValidacao === 'on',
        autoriza_comercial: req.body.autorizaComercial === 'on'
    });

    try {
        await feedback.save();
        res.redirect('/feedback');
    } catch (err) {
        console.error(err);
        res.send("Erro ao enviar feedback.");
    }
});

module.exports = router;
