const express = require('express');
const app = express();
const port = 3000;

const { quotesRouter } = require('./src/routes');

app.use('/quote', quotesRouter);

app.get('/', (req, res) => {
	res.send({ message: "Hello World"})
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}!`)
})