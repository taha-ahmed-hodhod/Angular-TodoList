import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  host:{
    class: 'col-9'
  }
})
export class Child1Component {}
