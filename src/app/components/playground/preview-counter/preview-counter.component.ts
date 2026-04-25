import { Component, inject } from '@angular/core';
import { CounterServices } from '../../../services/counter.service';

@Component({
  selector: 'app-preview-counter',
  standalone: false,
  templateUrl: './preview-counter.component.html',
  styleUrl: './preview-counter.component.css',
})
export class PreviewCounterComponent {
  // constructor( public counterServices : CounterServices){}
    counterServices = inject(CounterServices)

}
