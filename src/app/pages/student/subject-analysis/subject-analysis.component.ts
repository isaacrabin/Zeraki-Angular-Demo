import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-analysis',
  templateUrl: './subject-analysis.component.html',
  styleUrl: './subject-analysis.component.scss'
})
export class SubjectAnalysisComponent implements OnInit {

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
