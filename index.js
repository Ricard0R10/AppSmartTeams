const express = require('express');
const router = express.Router();


const adminRoutes = require('./routes/admin');
    app.use('/admin', adminRoutes);


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/feedback.html');
});



module.exports = router;
