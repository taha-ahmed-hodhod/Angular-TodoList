import { Component, inject } from '@angular/core';
import { CounterServices } from '../../../services/counter.service';

@Component({
  selector: 'app-directive',
  standalone: false,
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  // constructor(public counterServices: CounterServices){}
  counterServices = inject(CounterServices)
}
