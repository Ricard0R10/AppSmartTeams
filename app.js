const express = require('express');
const adminRoutes = require('./routes/admin');
const feedbackRoutes = require('./routes/feedback');
const app = express();

// Configurações do Express e middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/admin', adminRoutes);
app.use('/feedback', feedbackRoutes);

// Inicialize o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Mais configurações conforme necessário
