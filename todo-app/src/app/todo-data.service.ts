import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {
  lastId = 0;
  todos = [];
  constructor() {
  }

  addTodo(todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id, values) {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleTodoComplete(todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
