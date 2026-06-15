import { FormGroup } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive()
export abstract class FormBase {
  abstract form: FormGroup;

  hasError(controlName: string, error?: string) {
    const control = this.form.get(controlName);
    if (error) {
      return !!(control?.hasError(error) && (control?.touched || control?.dirty));
    }
    return !!(control?.invalid && (control?.touched || control?.dirty));
  }
}
