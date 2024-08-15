const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const todos = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

app.post('/add', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
