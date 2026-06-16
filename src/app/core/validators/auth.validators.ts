import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export const EmailValidator = [Validators.required, Validators.email];

export const LoginPasswordValidator = [Validators.required];

export const RegisterPasswordValidator = [
  Validators.required,
  Validators.minLength(8),
  Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])/),
];

export const UsernameValidator = [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(20),
  Validators.pattern(/^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/),
];

export const OtpValidator = [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(6),
  Validators.pattern(/^[0-9]{6}$/),
];

export const passwordMatchValidator: ValidatorFn = (form: AbstractControl) => {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  return password?.value === confirmPassword?.value ? null : { passwordMismatch: true };
};
