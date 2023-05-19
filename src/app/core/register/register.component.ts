import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: [RegisterComponent._DEFAULT_NAME, [Validators.required]],
    email: [
      RegisterComponent._DEFAULT_EMAIL,
      [Validators.required, Validators.email],
    ],
    password: [RegisterComponent._DEFAULT_PASSWORD, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {}

  private static _DEFAULT_NAME: string = 'Put your name here';
  private static _DEFAULT_EMAIL: string = 'Put your email here';
  private static _DEFAULT_PASSWORD: string = 'password';
}
