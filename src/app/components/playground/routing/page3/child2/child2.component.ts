import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  host:{
    class: 'col-9'
  }
})
export class Child2Component {}
