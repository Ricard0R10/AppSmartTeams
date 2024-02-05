const XLSX = require('xlsx');
const Territorio = require('../models/territorio');

const processFile = async (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    // Aqui você processa cada linha do arquivo
    for (const row of data) {
        // Ajuste as propriedades conforme a estrutura do seu arquivo e modelo
        const territorio = new Territorio(
            row.Celula,
            row.Rua,
            row.NumeroPorta,
            row.Andar,
            row.CodigoPostal,
            row.Localidade
        );

        try {
            await territorio.save(); // Salvar no banco de dados
        } catch (err) {
            console.error('Erro ao salvar território:', err);
            // Você pode decidir como lidar com os erros aqui
        }
    }
};

module.exports = { processFile };
