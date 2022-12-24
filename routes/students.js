const express = require('express');
const router = express.Router();


let students = [
    {
        name:"kedar",
        email:"k@gmail.com",
        mobile:"95648756654",
        batch: "WDB40",
        mentor:"Nagrajan"
    },
    {
        name:"tony",
        email:"tony@gmail.com",
        mobile:"9569784454",
        batch: "WDB40",
        mentor:"Nagrajan"
    }
]
// router.get('/',(req,res)=>{
//     res.send(`<h1>Welcome to Express! student management</h1>
//     <h4>Your app route is /students</h4>
//     `)

// })

router.get('/',(req,res)=>{
    res.send(students)
    // res.send (`<h1>Welcome to Express</h1>`)
})
router.get('/:id',(req,res)=>{
    if( req.params.id < students.length )
        res.status(200).send(students[req.params.id])
    else
        res.status(400).send({
            message:"Invalid ID"
        })
})

router.post('/',(req,res)=>{
    if(req.body.name && req.body.email && req.body.mobile)
   {
    let student = students.filter((e)=>e.email===req.body.email)
    if(student.length===0)
    {
        students.push(req.body)
        res.status(200).send({
            message:"Student Added Successfully"
        })
     }
     else{
        res.status(400).send({
            message:`${req.body.email} already exists`
        })
    }
   }
    
   else{
    res.status(400).send({
        message:"Name, Email, Mobile is mandatory!"
    })
}
   
})

router.put('/:id',(req,res)=>{
    if(req.params.id<students.length)
    {
        students.splice(req.params.id,1,req.body)
        res.status(200).send({
            message:"Details updated successfully!"
        })
    }
    else{
        res.status(400).send({
            message:"Invalid ID"
        })
    }
})

router.delete('/:id',(req,res)=>{
    if(req.params.id<students.length)
    {
        let deletedData = students.splice(req.params.id,1,req.body)
        res.status(200).send({
            message:"Details Deleted successfully!",
            data:deletedData
        })
    }
    else{
        res.status(400).send({
            message:"Invalid ID"
        })
    }
})

module.exports = router;