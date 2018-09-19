import { NgModule } from '@angular/core';
import {ComplianceRoutingModule} from './compliance-routing.module';
import {ComplianceComponent} from './compliance.component';


@NgModule({
  imports: [
    ComplianceRoutingModule
  ],
  declarations: [ ComplianceComponent ]
})
export class ComplianceModule { }
