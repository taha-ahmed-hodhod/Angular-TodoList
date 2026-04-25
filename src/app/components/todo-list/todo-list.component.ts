import { Component, inject, OnInit } from '@angular/core';
import { TodoItem } from '../../model/todo-item';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent{
  todoService = inject(TodoListService)

}
