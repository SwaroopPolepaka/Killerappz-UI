import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComplianceComponent} from './compliance.component';

const routes: Routes = [
  {
    path: '',
    component: ComplianceComponent,
    data: {
      title: 'Compliance - xyz'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRoutingModule {
}
