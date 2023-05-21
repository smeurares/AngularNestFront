import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [
      LoginComponent._DEFAULT_EMAIL,
      [Validators.required, Validators.email],
    ],
    password: [LoginComponent._DEFAULT_PASSWORD, [Validators.required]],
    remember: [LoginComponent._DEFAULT_REMEMBER, []],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/shop']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  private static _DEFAULT_EMAIL: string = '';
  private static _DEFAULT_PASSWORD: string = '';
  private static _DEFAULT_REMEMBER: boolean = false;
}
