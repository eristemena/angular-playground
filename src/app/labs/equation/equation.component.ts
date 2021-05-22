import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { MathValidators } from 'src/app/shared/math-validators';
import { delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    MathValidators.addition('answer', 'a', 'b')
  ]);

  secondsPerSolution: number = 0;

  constructor() {
    this.form.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(200),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        };
      }, { numberSolved: 0, startTime: new Date() })
    ).subscribe(({ numberSolved, startTime }) => {
      this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

      this.form.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });
    });
   }

  get a() {
    return this.form.value.a;
  }

  get b() {
    return this.form.value.b;
  }

  ngOnInit(): void {
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}
