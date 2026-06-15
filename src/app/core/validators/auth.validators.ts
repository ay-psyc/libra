import { Validators } from '@angular/forms';

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
