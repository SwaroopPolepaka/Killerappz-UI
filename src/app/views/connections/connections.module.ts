import { NgModule } from '@angular/core';
import {ConnectionsRoutingModule} from './connections-routing.module';
import {ConnectionsComponent} from './connections.component';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArchwizardModule } from 'angular-archwizard';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from '../../views/components/modals.component';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppConfig} from '../../app.config';

@NgModule({
  imports: [
    NgxPaginationModule,
    ArchwizardModule,
    ConnectionsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ ConnectionsComponent ],
  providers: [AppConfig]
})
export class ConnectionsModule { }
