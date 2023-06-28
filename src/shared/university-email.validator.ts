import { AbstractControl } from '@angular/forms';

const universityEmailRegex = /^\w+\.\w+@(?:student\.)?unitbv.ro$/;

export function ValidateUniversityEmail(control: AbstractControl) {
  if (!universityEmailRegex.test(control.value)) {
    return { invalidUniversityEmail: true };
  }
  return null;
}
