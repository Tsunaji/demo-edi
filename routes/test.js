const express = require('express')

// eslint-disable-next-line babel/new-cap
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		// const ping = file.ping();

		// read excel by call api
		// call api
		// save
		res.status(200);
		res.send("HELLO WORLD");
		next();
	} catch (error) {
		next(error);
	}
});

module.exports = router;