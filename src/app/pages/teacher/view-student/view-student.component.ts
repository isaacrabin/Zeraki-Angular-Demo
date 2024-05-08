import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.scss'
})
export class ViewStudentComponent {
  subject: string = ''

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.subject = params['id'];
      })
  }
}
