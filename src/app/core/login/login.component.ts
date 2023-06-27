import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ValidateUniversityEmail } from 'src/shared/university-email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
    console.log('LoginForm initialized');
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        ValidateUniversityEmail,
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    this.authService.login(this.loginForm.value).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['/shop']);
      },
      error: (err: Error) => {
        alert(err.message);
      },
    });
  }
}
