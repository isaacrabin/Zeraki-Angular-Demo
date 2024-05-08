import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-performance',
  templateUrl: './students-performance.component.html',
  styleUrl: './students-performance.component.scss'
})
export class StudentsPerformanceComponent {
  subject: string = ''

  sampleData: any[] = [
    { id: 1, name: 'John Doe', mat: 30,eng: 37, kis:67,phy:69 },
    { id: 2, name: 'Alice Smith', mat: 25, eng: 37 ,kis:67,phy:69},
    { id: 3, name: 'Bob Johnson', mat: 35, eng: 30 ,kis:67,phy:69},
    { id: 4, name: 'Emily Brown', mat: 28, eng: 36,kis:67,phy:69 },
    { id: 5, name: 'Michael Davis', mat: 40, eng: 70,kis:67,phy:69},
    { id: 6, name: 'Emma Wilson', mat: 32, eng: 30 ,kis:67,phy:69},
    { id: 7, name: 'James Lee', mat: 45,eng: 30,kis:67,phy:69},
    { id: 8, name: 'Olivia Taylor', mat: 27, eng: 30,kis:67,phy:69},
    { id: 9, name: 'William Clark', mat: 38, eng: 30 ,kis:67,phy:69},
    { id: 10, name: 'Sophia Martinez', mat: 33,eng: 30 ,kis:67,phy:69},
  ];

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.subject = params['id'];
      })
  }
}
