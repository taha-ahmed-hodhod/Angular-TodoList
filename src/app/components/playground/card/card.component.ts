import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title: string = "🤩";
  message: string = "are you ready to play?";
  messageFromTemplete: string = "";

  printMessage(msg : "play" | "not") {
    console.log(msg);
  }
  onInput(input : Event) {
    const value = (input.target as HTMLInputElement).value;
    this.messageFromTemplete = value;
    console.log(value);
  }
}
