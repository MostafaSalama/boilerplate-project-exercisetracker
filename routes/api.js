const router = require('express').Router();
const User = require('../Models/User');
router.post('/exercise/new-user', (request, response) => {
	const { username } = request.body;
	const user = new User({
		username,
		exercises: [],
	});
	user.save().then(
		response.json({
			username: user.username,
			id: user.id,
		}),
	);
});

module.exports = router;
