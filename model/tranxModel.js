const mongoose = require('mongoose');

const tranxSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add a title'],
		trim: true,
	},
	amount: {
		type: Number,
		required: [true, 'Add your amount'],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Transaction', tranxSchema);
