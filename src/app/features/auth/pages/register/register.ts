import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { FormBase } from '../../../../shared/base/form.base';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  EmailValidator,
  RegisterPasswordValidator,
  UsernameValidator,
} from '../../../../core/validators/auth.validators';

@Component({
  selector: 'app-register',
  imports: [InputText, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true,
})
export class Register extends FormBase implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', EmailValidator],
      password: ['', RegisterPasswordValidator],
      username: ['', UsernameValidator],
    });
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
