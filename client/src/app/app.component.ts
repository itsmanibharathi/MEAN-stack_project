// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count!: number;

  constructor(private countService: CountService) {}

  ngOnInit(): void {
    this.getCount();
  }

  getCount(): void {
    this.countService.getCount().subscribe((data) => {
      this.count = data.count;
    });
  }

  incrementCount(): void {
    this.countService.incrementCount().subscribe((data) => {
      this.count = data.count;
    });
  }
}
