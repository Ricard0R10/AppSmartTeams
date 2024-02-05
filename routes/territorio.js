// Dentro do arquivo de rotas (por exemplo, routes/territorio.js)
router.get('/get_moradas', async (req, res) => {
    const celula = req.query.celula;
    try {
        const moradas = await Territorio.findByCell(celula); // Implemente este método no modelo Territorio
        res.json(moradas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar moradas');
    }
});
