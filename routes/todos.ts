import { Router } from "express";

const router = Router();

import { Todo } from "../models/todos"; 

const todos:Todo[] = [];

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
const newTodo : Todo ={
    id:new Date().toISOString(),
    text: req.body.text
}
todos.push(newTodo);
 res.status(200).json({message:'Added todo',todo:newTodo,todos:todos})
})

router.put('/todo/:todoid',(req,res,next)=>{
   const tid = req.params.todoid;
   const todoIndex =todos.findIndex((todoItem)=>todoItem.id===tid);
   if(todoIndex>=0){
    todos[todoIndex]={id:todos[todoIndex].id ,text:todos[todoIndex].text}
    return res.status(200).json({message:'Updated todo',todos:todos})
   }
     res.status(404).json({message:'Could not find the todo'})
    })

    router.delete('todo/:todoid',(req,res,next)=>{
        const tid = req.params.todoid;
        todos.filter((todoItem)=>todoItem.id!==tid);
        res.status(200).json({message:'Deleted todo',todos:todos})
    })

export default router;