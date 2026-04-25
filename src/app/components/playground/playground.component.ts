import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  standalone: false,
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent implements OnInit{
  counter = 0;

  ngOnInit() : void{
    setInterval(() => {
      this.counter++;
    }, 1000)
  }

}
