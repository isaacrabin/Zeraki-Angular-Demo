import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-performance',
  templateUrl: './subject-performance.component.html',
  styleUrl: './subject-performance.component.scss'
})
export class SubjectPerformanceComponent implements OnInit{

 @Input() data: any= [];

 ngOnInit(): void {

}
}
