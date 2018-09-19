import { Component, OnInit } from '@angular/core';
import {ApiJiraService} from 'app/services/api-jira.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-jiraissues',
  templateUrl: './jiraissues.component.html',
  styleUrls: ['./jiraissues.component.scss']
})
export class JiraIssuesComponent implements OnInit {
  result;
  constructor(private _service:ApiJiraService) { }

  ngOnInit() {
         this.result= this._service.getService()
         .subscribe(response  =>{ 
          this.result=response;
            console.log(this.result), 
            (error) => console.log(error)}
          );
         console.log(this.result); 
  }

}
