import { Component, inject } from '@angular/core';
import { Rxjs } from '../../../services/rxjs.service';

@Component({
  selector: 'app-second',
  standalone: false,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
    rxjsServices = inject(Rxjs)
}
