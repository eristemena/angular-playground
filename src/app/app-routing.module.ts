import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module')
      .then((m) => m.TemplateModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module')
      .then((m) => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
