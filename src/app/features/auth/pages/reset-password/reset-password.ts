import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormBase } from '../../../../shared/base/form.base';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  passwordMatchValidator,
  RegisterPasswordValidator,
} from '../../../../core/validators/auth.validators';

@Component({
  selector: 'app-reset-password',
  imports: [InputText, ReactiveFormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
  standalone: true,
})
export class ResetPassword extends FormBase implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        password: ['', RegisterPasswordValidator],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator },
    );
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
