const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const { quotesRouter } = require('./src/routes');

app.use(cors());
app.use('/quote', quotesRouter);

app.get('/', (req, res) => {
	res.send({ message: "Hello World"})
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}!`)
})