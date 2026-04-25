import { AfterViewInit, Component, ElementRef, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Rxjs } from '../../../services/rxjs.service';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() counter !: number;
  @ViewChild("myInput") eleInput!: ElementRef<HTMLInputElement>;
  rxjsService = inject(Rxjs)

  ngOnInit(): void {
    console.log("on Init")
    this.rxjsService.observable.subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
  ngOnChanges(SimpleChanges: SimpleChanges): void {
    console.log("change")
    console.log(SimpleChanges)
  }
  ngAfterViewInit(): void {
    console.log("")
    this.eleInput.nativeElement.focus();
  }
  ngOnDestroy(): void {
    console.log("onDesroy")
  }
}
