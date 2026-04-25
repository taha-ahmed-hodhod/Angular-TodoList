import { inject, Injectable } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private http = inject(HttpClient)
  private _todoList : TodoItem[] = [];
  private toster = inject(ToastrService)
  private _isLoading = false;

  isAddItem = false;
  searchText = "" ;

  api = "http://localhost:3000/tasks"
  getTodoList() {
    this._isLoading = true;
    this.http.get<TodoItem[]>(this.api).subscribe({
      next: (todoList) => {
        setTimeout(() => {
          this._todoList = todoList;
          this.updateList()
          this._isLoading = false;
        }, 500)
      },
      error: () => {
          this.toster.error("Error Happend in add new task")
        this._isLoading = false;
      }
    })
  }


  search(){
    this._filterdList = this._filterdList.filter(item => {
      const task = item.task.toLowerCase().replaceAll(' ', '');
      const searchText = this.searchText.toLowerCase().replaceAll(' ', '');

      return task.includes(searchText)
    })
  }

  updateList(){
    this._filterdList = this._todoList ;
    if(this.searchText){
      this.search()
    }
  }

  _filterdList: TodoItem[] = [];

  onAddNewItem(task: string, description: string){
    const newItem: TodoItem = {
      id: (new Date().getTime() * Math.random()).toString(),
      task,
      description,
      createdAt: new Date(),
      isChacked: false,

    }

    this._todoList.push(newItem);
    this.toster.success("Task is Added")
    this.isAddItem = false;

    this.http.post<TodoItem>(this.api, newItem).subscribe({
      next: (response) => {
        // استبدل الـ ID بـ ID من الـ server
        const addedItemIndex = this._todoList.findIndex(item => item.id === newItem.id)
        if(addedItemIndex !== -1) {
          this._todoList[addedItemIndex].id = response.id
          this.updateList()
        }
      },
      error:() => {
        setTimeout(() => {
          this._todoList.pop()
          this.toster.error("Error Happend in add new task")
        },2000)
      }
    })
  }
  onDelete(itemId: string){
    const itemIndex = this._todoList.findIndex(item => item.id === itemId)

    if(itemIndex === -1) return;
    const removeItem = this._todoList[itemIndex];
    this._todoList = this._todoList.filter(item => item.id !== itemId)
    this.updateList()

    this.http.delete(`${this.api}/${itemId}`).subscribe({
      next: () => {
        this.toster.success("Task Is Deleted")
      },
      error: () => {
        this.toster.error("Error in Delete Task")
        this._todoList.splice(itemIndex, 0, removeItem)
        this.updateList()
      }
    })
  }
  get filterdList(){
    return this._filterdList;
  }

  get isLoading(){
    return this._isLoading;
  }
}
