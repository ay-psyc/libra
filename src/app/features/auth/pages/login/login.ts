import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EmailValidator,
  LoginPasswordValidator,
} from '../../../../core/validators/auth.validators';
import { FormBase } from '../../../../shared/base/form.base';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [InputText, RouterLink, ReactiveFormsModule, Message],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login extends FormBase implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', EmailValidator],
      password: ['', LoginPasswordValidator],
    });
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
