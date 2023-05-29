import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocuymentUploadComponent } from './docuyment-upload/docuyment-upload.component';

const routes: Routes = [
  {
    path:'upload',component:DocuymentUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
