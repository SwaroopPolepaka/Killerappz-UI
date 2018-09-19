import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {JiraIssuesComponent} from './jiraissues.component';

const routes :Routes =[
    {
        path: '' ,
        component:JiraIssuesComponent,
        data:{
            title:'Jira-Server Issues'
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class JiraIssuesRoutingModule{
      
  }