const express = require('express');
const uuid = require('uuid');
const { defaultState, nextState } = require('./statuses.js');

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.method, req.path);
  next();
});

const todo = { title: 'Todo', list: [] };

app.get('/api/initState', (_req, res) => res.json({ title: 'Todo', list: [] }));

app.get('/api/todo', (_req, res) => res.json(todo));

app.get('/api/removeTask/:id', (req, res) => {
  const newList = todo.list.filter((item) => item.id !== req.params.id);
  Object.assign(todo, { list: newList });
  res.json(todo);
});

app.get('/api/removeAll', (_req, res) => {
  todo.list = [];
  res.json(todo);
});

app.get('/api/updateStatus/:id', (req, res) => {
  const index = todo.list.findIndex((item) => item.id === req.params.id);
  todo.list[index].status = nextState(todo.list[index].status);
  res.json(todo);
});

app.post('/api/updateTitle', (req, res) => {
  todo.title = req.body.title;
  res.json(todo);
});

app.post('/api/addTask', (req, res) => {
  const item = { id: uuid(), name: req.body.name, status: defaultState() };
  todo.list.push(item);
  res.json(todo);
});

app.listen(5000, () => console.log('server is listening on 5000'));
