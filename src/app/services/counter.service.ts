import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export  class CounterServices {
    counter = 0;

  logs:{counter:number , date : Date}[] = []
  increment(){
    if(this.counter === 10) return;
    this.counter++;
  }
  decrement(){
    if(!this.counter) return;
    this.counter--;
  }
  onLog(){
    const log = {
      counter : this.counter,
      date: new Date()
    }

    this.logs.push(log)
  }
}