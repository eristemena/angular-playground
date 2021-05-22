import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';



@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent,
    AnswerHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleComponent,
    AnswerHighlightDirective
  ]
})
export class SharedModule { }
