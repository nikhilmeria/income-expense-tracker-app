const Tranx = require('../model/tranxModel');

exports.getTranx = async (req, resp, next) => {
	try {
		const data = await Tranx.find();
		console.log(data);
		resp.status(200).json({
			success: true,
			count: data.length,
			data: data,
		});
	} catch (err) {
		console.log(err);
		resp.status(500).json({
			success: false,
			message: ' Failed to fetch transaction from DB',
		});
	}
};

exports.addTranx = async (req, resp, next) => {
	try {
		const { title, amount } = req.body;
		const data = await Tranx.create(req.body);
		console.log(data);
		resp.status(201).json({
			success: true,
			data: data,
		});
	} catch (err) {
		if (err.name === 'ValidationError') {
			const errMess = Object.values(err.errors).map((ei) => ei.message);
			return resp.status(400).json({
				success: false,
				message: errMess,
			});
		}
		console.log(err);
		return resp.status(500).json({
			success: false,
			message: ' Failed to add transaction to DB',
		});
	}
};

exports.delTranx = async (req, resp, next) => {
	try {
		const id = req.params.id;
		console.log('del id => ', id);

		const data = await Tranx.findById(id);
		console.log(data);
		if (data) {
			await data.remove();
			return resp.status(200).json({
				success: true,
				data: {},
			});
		} else {
			return resp.status(404).json({
				success: false,
				message: ' Failed to find transaction from DB for deletion',
			});
		}
	} catch (err) {
		console.log(err);
		return resp.status(500).json({
			success: false,
			message: ' Failed to fetch transaction from DB',
		});
	}
};
