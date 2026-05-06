import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: false,
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
})
export class Page2Component implements OnInit{
  route = inject(ActivatedRoute);
  router = inject(Router)
  ngOnInit(): void {
    console.log(this.route.snapshot.params["msg"]);
    this.route.params.subscribe({
      next:() => {

      }
    })
  }
  goToPAge1(){
    this.router.navigate(['page1']);
    // this.router.navigateByUrl('page1');
  }
}
