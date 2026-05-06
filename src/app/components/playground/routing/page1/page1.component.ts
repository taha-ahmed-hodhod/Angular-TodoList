import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: false,
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component implements OnInit{
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
  }
}
