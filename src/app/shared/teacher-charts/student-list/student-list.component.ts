import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  @Input() data: any= [];

  constructor(private toastr: ToastrService){}

  viewStudent(data: any){
    this.toastr.warning(data.name,"Hello, this is");
  }
}
