import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormBase } from '../../../../shared/base/form.base';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OtpValidator } from '../../../../core/validators/auth.validators';

@Component({
  selector: 'app-verify-otp',
  imports: [InputText, ReactiveFormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
  standalone: true,
})
export class VerifyOtp extends FormBase implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      otp: ['',OtpValidator],
    });
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
