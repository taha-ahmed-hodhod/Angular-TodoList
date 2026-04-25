import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  // messageFromChild = "";

  // onReciveMessage(msg: string){
  //   this.messageFromChild = msg;
  // }
  messageFromChild = "";

  onReciveMessage(msg:string){
    this.messageFromChild = msg;
    // console.log("data is sended")
  }
}
