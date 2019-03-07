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
router.post('/exercise/add',async (request,response)=>{

    const {userId} = request.body ;
    const { description,duration,date} =request.body ;
    let userDate = date ? new Date(date): new Date() ; 
    try {
        const user = await User.findOne({ _id: userId });
        user.exercises.push([
            {
                description,
                duration,
                date:userDate.toLocaleDateString('en-us')
            }
        ])
        await User.update({_id:userId},{
            $set: { exercises:user.exercises}
        })
        response.json({
            id:userId,
            exercise:{
                description,
                duration,
                date:userDate
            }
        }); 
    } catch (error) {
        response.send('error');
    }
    
})

module.exports = router;
