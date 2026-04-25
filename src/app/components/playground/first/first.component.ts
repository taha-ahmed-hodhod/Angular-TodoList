import { Component, inject } from '@angular/core';
import { Rxjs } from '../../../services/rxjs.service';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent{
  rxjsServices = inject(Rxjs)
  
  constructor() {
    // this.rxjsServices.subscribeToSubject();
    this.rxjsServices.randomObservable.subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}
