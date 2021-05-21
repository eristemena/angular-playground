import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabsRoutingModule } from './labs-routing.module';
import { EquationComponent } from './equation/equation.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EquationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    SharedModule
  ]
})
export class LabsModule { }
