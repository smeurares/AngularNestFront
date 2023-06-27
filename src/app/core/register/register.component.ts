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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  options: string[] = ['admin', 'buyer'];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        ValidateUniversityEmail,
      ]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    const formValue = this.registerForm.value;
    const payload = {
      name: formValue.username,
      email: formValue.email,
      password: formValue.password,
      role: formValue.role,
      boughtProducts: [],
    };
    this.authService.register(payload).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/auth/login']);
      },
      error: (err: Error) => {
        alert(err.message);
      },
    });
  }
}
