import { Component, inject } from '@angular/core';
import { CounterServices } from '../../../services/counter.service';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  counterServices = inject(CounterServices)
}
