import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnectionsComponent} from './connections.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
    data: {
      title: 'Connections'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionsRoutingModule {
}