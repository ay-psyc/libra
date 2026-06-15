import { Validators } from '@angular/forms';

export const EmailValidator = [Validators.required, Validators.email];

export const PasswordValidator = [Validators.required];
