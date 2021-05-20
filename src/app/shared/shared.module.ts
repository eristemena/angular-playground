import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleComponent
  ]
})
export class SharedModule { }
