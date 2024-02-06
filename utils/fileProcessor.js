const xlsx = require('xlsx');
const Territorio = require('../models/territorio');

const processFile = async (filePath) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const item of data) {
        
        const territorio = new Territorio(item.Célula, item.Morada, item.NUMERO, item.ANDAR, item.CP7, item.Localidade);
        await territorio.save();
    }
}

module.exports = { processFile };
