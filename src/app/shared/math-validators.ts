import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const answer = form.value[target];
      const b = form.value[sourceOne];
      const a = form.value[sourceTwo];

      if (parseInt(answer) === parseInt(a) + parseInt(b)) {
        return null;
      }

      return { result: false };
    };
  }
}
