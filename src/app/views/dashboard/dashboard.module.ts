import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    NgxPaginationModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
