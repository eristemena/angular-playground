import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    HomeComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
  ]
})
export class TemplateModule { }
