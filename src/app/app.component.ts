import { Component, inject, OnInit } from "@angular/core";
import { TodoListService } from "./services/todo-list.service";

@Component({
    selector:"app-root",
    templateUrl:"./app.component.html",
    styleUrl:"./app.component.css",
    standalone: false,
    host:{
        class:"d-flex flex-column min-vh-100"
    }
})
export class AppComponent implements OnInit{
    todoListService = inject(TodoListService)
    ngOnInit(): void {
        this.todoListService.getTodoList()
  }
}