const router = require('express').Router() 

router.post('/exercise/new-user',(request,response)=>{
    console.log(request.body);
    response.send('hEllo world') ; 
})

module.exports = router ; 