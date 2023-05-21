import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  options: string[] = ["admin", "buyer"];

  constructor() {}

  ngOnInit(): void {
   this.initializeRegisterForm();
  }

  initializeRegisterForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }


}
