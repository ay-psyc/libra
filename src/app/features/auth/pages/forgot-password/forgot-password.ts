import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { FormBase } from '../../../../shared/base/form.base';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  EmailValidator,
} from '../../../../core/validators/auth.validators';

@Component({
  selector: 'app-forgot-password',
  imports: [InputText, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
  standalone: true,
})
export class ForgotPassword extends FormBase implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', EmailValidator],
    });
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
