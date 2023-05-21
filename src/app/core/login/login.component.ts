import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.initializeLoginForm();
   console.log('LoginForm initialized');
  }

  initializeLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log('Submit button clicked');
    console.log(this.loginForm.valid)
    this.authService.login(this.loginForm.value).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/shop']);
      },
      error: (err: Error) => {
        alert(err.message);
      }
    });
  }
}
