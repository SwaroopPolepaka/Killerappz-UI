import {NgModule} from '@angular/core';
import {JiraIssuesRoutingModule} from './jiraissues-routing.module';
import {JiraIssuesComponent} from './jiraissues.component';
import {ApiJiraService} from 'app/services/api-jira.service';
import{Response} from '@angular/http';
import{CommonModule} from '@angular/common';


@NgModule({
    imports: [
      JiraIssuesRoutingModule,CommonModule
    ],
    declarations: [JiraIssuesComponent],
    providers: [ApiJiraService]
  })
  export class JiraIssuesModule{
    jiraData;
    constructor(private _service :ApiJiraService){}

    getJiraIssues(){
    
      this._service.getService()
                    .subscribe(
                    (response :Response)  =>{ 
                    this.jiraData=response;
                      console.log(response), 
                      (error) => console.log(error)}
                    );
    }   
  }