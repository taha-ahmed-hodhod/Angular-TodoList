import { Component, inject } from '@angular/core';
import { CounterServices } from '../../../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterServices = inject(CounterServices)
}
