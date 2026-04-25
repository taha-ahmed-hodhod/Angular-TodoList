import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Rxjs {
   sub = new Subscription();
  subject = new Subject();
  observable = new Observable<number>((obs) => {
    let counter = 0;
    let id = setInterval(() => {
      obs.next(++counter)
    },1000)

    return () => {  // مش هيشتغل الا ما الوبسبرفابل يتعمله انسبسكريب
      clearInterval(id);
    }
  });
  randomObservable = new Observable(obs => {
    obs.next(Math.random());
  })
  onClick() {
    const observer = {
      next: (message : number) => {
        console.log(message);
      },
      error: () => {

      },
      complete: () => {
        console.log("completed")
      }
    } 
   const subId = this.observable.subscribe(observer);
   this.sub.add(subId);

  }
  sendDataToSubect(){
  const randomNumber = Math.random();
  this.subject.next(randomNumber)
  }
  subscribeToSubject(){
    this.subject.subscribe({
      next: (num) => {
        console.log(num)
      },
      error: () => {},
      complete: () => {}
    })
  }
  onUnSubscribe(){
    this.sub.unsubscribe();
    console.log("un Subscribe")
  }
}
