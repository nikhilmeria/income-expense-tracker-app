const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const trnxRouter = require('./routes/transactionRouter');

dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //body-parser

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/trnx', trnxRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, resp, next) =>
		resp.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

app.listen(process.env.PORT || 5000, () => {
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((connectionDetails) => {
			console.log(
				`Server in ${process.env.NODE_ENV} mode @ Port - ${PORT}`.yellow.bold
			);
			console.log(`Mongo DB @ ${connectionDetails.connection.host}`.blue.bold);
		})
		.catch((err) => {
			console.log(`${err}`.red.bold);
			process.exit(1);
		});
});
