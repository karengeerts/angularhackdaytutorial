import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggeComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleTodoComplete(todo: Todo) {
    this.onToggleTodoComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  ngOnInit() {
  }

}
