import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicydetailsComponent } from './policydetails/policydetails.component';

const routes: Routes = [
  {
    path: '',
    component: PolicydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
