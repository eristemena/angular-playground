import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquationComponent } from './equation/equation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'math',
    component: EquationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabsRoutingModule { }
