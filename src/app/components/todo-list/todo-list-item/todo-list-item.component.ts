import { Component, Input, output } from '@angular/core';
import { TodoItem } from '../../../model/todo-item';

@Component({
  selector: '[app-todo-list-item]',
  standalone: false,
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
  
})
export class TodoListItemComponent {
 @Input({ required : true}) todoItem !: TodoItem ;
 delete = output<string>();
  onDelete(){
    this.delete.emit(this.todoItem.id)
  }
}
