const express=require('express')
const app=express()
app.use(express.json())
let users=[   ]
//get all users
app.get('/users',(req,res)=>
{
    res.json(users)
})
//post users 
app.post('/users',(req,res)=>
{
    const newUser={id:users.length+1,...req.body}
    users.push(newUser)
    res.status(201).json(newUser)
})
//update put
app.put('/users/:id',(req,res)=>
{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!users)return res.status(404).json({message:"users not find"})
        user.name=req.body.name||req.name
    user.email=req.body.email||req.email
    res.json(user)
})
//delete
app.delete('/users/:id',(req,res)=>{
    users=users.filter(user=>user.id !==parseInt(req.params.id))
    res.json({message:'user deleted'})
})
app.listen(8000,()=>console.log("server is running"))