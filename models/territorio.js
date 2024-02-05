// models/territorio.js
const sql = require('../utils/database');

class Territorio {
    constructor(celula, rua, numero_porta, andar, codigo_postal, localidade) {
        this.celula = celula;
        this.rua = rua;
        this.numero_porta = numero_porta;
        this.andar = andar;
        this.codigo_postal = codigo_postal;
        this.localidade = localidade;
    }

    static fetchAll() {
        return sql.query('SELECT * FROM territorios');
    }

    static findByCell(celula) {
        return sql.query('SELECT * FROM territorios WHERE celula = $1', [celula]);
    }
    
    // Outros métodos conforme necessário
}

module.exports = Territorio;
