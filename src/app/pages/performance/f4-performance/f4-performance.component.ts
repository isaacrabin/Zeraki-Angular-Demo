import { Component } from '@angular/core';

@Component({
  selector: 'app-f4-performance',
  templateUrl: './f4-performance.component.html',
  styleUrl: './f4-performance.component.scss'
})
export class F4PerformanceComponent {
  sampleData: any[] = [
    { id: 1, name: 'John Doe', age: 30,current: 37 },
    { id: 2, name: 'Alice Smith', age: 25, current: 37 },
    { id: 3, name: 'Bob Johnson', age: 35, current: 30 },
    { id: 4, name: 'Emily Brown', age: 28, current: 36 },
    { id: 5, name: 'Michael Davis', age: 40, current: 70},
    { id: 6, name: 'Emma Wilson', age: 32, current: 30 },
    { id: 7, name: 'James Lee', age: 45,current: 30},
    { id: 8, name: 'Olivia Taylor', age: 27, current: 30},
    { id: 9, name: 'William Clark', age: 38, current: 30 },
    { id: 10, name: 'Sophia Martinez', age: 33,current: 30 },
  ];
}
