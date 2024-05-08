import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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
          this.router.navigate(['/app/analytics']);
          break;
        case 'student':
          this.router.navigate(['/app/dashboard/student/analytics']);
          break;
        case 'teacher':
          this.router.navigate(['/app/dashboard/teacher/analytics']);
          break;

        default:
          break;
      }
    },1000)
  }

}
