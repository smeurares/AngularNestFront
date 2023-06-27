import { AbstractControl } from '@angular/forms';

// ^ this represents the begining of the string
// \w that follows the ^ symbol represents that the email should start with a word character
// \w+ represents the 1 or more word characters
// \. represents the "." literal
// @ represets "@" literal
// (?:student\.)? represents the "student." literal that is optional becouse of the ? symbol at the end
// unitbv.r represents "unitbv.r" literal
// o$ represents the fact that the string should end in the "o" literal
const universityEmailRegex = /^\w+\.\w+@(?:student\.)?unitbv.ro$/;

export function ValidateUniversityEmail(control: AbstractControl) {
  if (!universityEmailRegex.test(control.value)) {
    return { invalidUniversityEmail: true };
  }
  return null;
}
