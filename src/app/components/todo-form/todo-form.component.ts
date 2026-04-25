import { Component, inject } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    desc: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })
  toddListService = inject(TodoListService);
  onsubmit(){
    if(this.todoForm.invalid) return;
    const task = this.todoForm.controls.task.value;
    const desc = this.todoForm.controls.desc.value;

    this.toddListService.onAddNewItem(task, desc )
  }
}
