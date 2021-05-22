import { Directive, ElementRef } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(private el: ElementRef, private control: NgControl) {

  }

  ngOnInit() {
    if ( this.control.control ) {
      let formGroup = this.control.control.parent as FormGroup;

      if ( formGroup ) {
        formGroup.valueChanges.pipe(
          map(({ a, b, answer }) => {
            return Math.abs((a + b - answer) / (a + b));
          })
        ).subscribe((score) => {
          let el = this.el.nativeElement as HTMLInputElement;

          if ( score < 0.2 ) {
            el.classList.add('bg-green-300');
          } else {
            el.classList.remove('bg-green-300');
          }
        })
      }
    }
  }

}
