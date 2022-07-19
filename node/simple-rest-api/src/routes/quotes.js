const express = require('express');
const router = express.Router();


router.get('/character/:character', (req, res) => {
	const { character } = req.params;
	res.send({ message: `You want a quote from ${character}.`})
});

module.exports = router;