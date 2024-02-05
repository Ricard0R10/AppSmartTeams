const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});



module.exports = router;
