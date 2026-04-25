import { Component, inject } from '@angular/core';
import { Rxjs } from '../../../services/rxjs.service';

@Component({
  selector: 'app-third',
  standalone: false,
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent {
  rxjsServices = inject(Rxjs)
  
  constructor() {
    // this.rxjsServices.subscribeToSubject();
    this.rxjsServices.randomObservable.subscribe({
      next: (data) => {
        console.log(data)
      },
    })
  }
}
