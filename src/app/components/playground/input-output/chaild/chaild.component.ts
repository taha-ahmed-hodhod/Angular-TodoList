import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chaild',
  standalone: false,
  templateUrl: './chaild.component.html',
  styleUrl: './chaild.component.css',
})
export class ChaildComponent {
  // @Input({required: true}) message = ""; // this can use in parent as attribute and this intial value // if you want this riquired  @input({riqured : true})
  // @Output() sendMessage = new EventEmitter(); // to create custom Event  // this in legacy approch
//  sendMessage = output<string>(); // to create custom Event  // this in legacy approch

  // onSendMessage(){
  //   this.sendMessage.emit("Hello parent");
  // }

  @Input() message = "";
  @Output() sendMessage = new EventEmitter()

  onSendMessage(){
    this.sendMessage.emit("hello Parent!")
  }
}
