import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ){
    this.authForm = this.fb.group({
      username:['',[Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  loginUser(type: string): void {
    const { username} = this.authForm.value;
    const payload = {
      username:username,
      userType:type
    };
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      sessionStorage.setItem('userType', type);
      switch (type) {
        case 'admin':
          this.toastr.success("Hi Admin, Welcome back to Zeraki");
          this.router.navigate(['/app/analytics']);
          break;
        case 'student':
          this.toastr.success("Hi Student, Welcome back to Zeraki");
          this.router.navigate(['/app/dashboard/student/analytics']);
          break;
        case 'teacher':
          this.toastr.success("Hi Teacher, Welcome back to Zeraki");
          this.router.navigate(['/app/dashboard/teacher/analytics']);
          break;

        default:
          break;
      }
    },1000)
  }

}
