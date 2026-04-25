import { Component, inject } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Rxjs } from '../../../services/rxjs.service';

@Component({
  selector: 'app-rxjs',
  standalone: false,
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent {
 rxsServices = inject(Rxjs)
}
