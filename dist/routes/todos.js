"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'Added todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoid', (req, res, next) => {
    const params = req.params;
    const tid = params.todoid;
    const body = req.body;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: todos[todoIndex].text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not find the todo' });
});
router.delete('todo/:todoid', (req, res, next) => {
    const params = req.params;
    const tid = params.todoid;
    // const tid = req.params.todoid;
    todos.filter((todoItem) => todoItem.id !== tid);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
