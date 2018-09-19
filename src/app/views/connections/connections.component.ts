import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from '../../services/connection.service'
import { HtmlParser } from '@angular/compiler';
import { ViewChild } from '@angular/core'
import {WizardComponent} from 'angular-archwizard';
import {ElementRef, Renderer2} from '@angular/core';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
  title = 'Select Connector';
  state = 'add';
  step = '0';
  adredt = 'Add New';
  errstr= '';
  isConnection = true;
  isConnectionForm = false;
  ActiveConnection: string;
  modalRef: BsModalRef;
  dlgRef: BsModalRef;
  isLoading: boolean;
  conectionList = [];
  selectedConnection: any;
  connectionCardList: any = [];
  subscriptions: Subscription[] = [];
  formdata = new FormGroup({
    org_id: new FormControl(1),
    np_url: new FormControl( '', Validators.required),
    np_username: new FormControl('', Validators.required),
    np_password: new FormControl('', Validators.required),
    refresh_rate: new FormControl('', [Validators.required])
  });
  public now: Date = new Date();
  @ViewChild(WizardComponent)
  public awwiz: WizardComponent;
    constructor( private modalService: BsModalService, private confirmService: BsModalService, private conServ: ConnectionService) {
    // console.log(this.conectionList);
  }
openDialog(template: TemplateRef<any>) {
  this.dlgRef = this.confirmService.show(template);

}
showTitle() {
  if (this.isConnection) {
 this.title = 'Select Connector';
  }
  if (this.isConnectionForm) {
    this.title = this.ActiveConnection;
  }
}
confirm(): void {
  // this.modalRef.hide();
  this.deleteConnection();
}

decline(): void {
  this.modalRef.hide();
  this.dlgRef.hide();
}

  openModal(template: TemplateRef<any>) {
    this.step = '0';
    this.modalRef = this.modalService.show(template);
     this.showConnection();
  }
  editModel(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  showConnection() {
    this.isConnection = true;
    this.isConnectionForm = false;
    this.showTitle()
  }
  showDetails(connection) {
    this.selectedConnection = connection;
    this.isConnection = false;
    this.isConnectionForm = true;
    this.ActiveConnection = connection.connectioncardname;
    this.showTitle()

  }
  editDetails(connection, template: TemplateRef<any>) {
    this.adredt = 'Edit';
    this.state = 'edit';
    this.step = '1';
    this.showDetails(connection);
    console.log(this.awwiz);
    console.log(connection);
    this.editModel(template);
    const temp = JSON.parse(localStorage.getItem('formData'));
    console.log(temp);
    this.formdata.patchValue({
      org_id: temp.org_id,
      np_url: temp.np_url,
      np_username: temp.np_username,
      np_password: temp.np_password,
      refresh_rate: temp.refresh_rate
    });
  }
  deleteConnection() {
    localStorage.removeItem('connectors');
    localStorage.removeItem('stats');
    localStorage.removeItem('formData');
      this.conectionList.pop();
    this.dlgRef.hide();
    this.modalRef.hide();
    this.isLoading = true;
    this.state = 'add';
    this.step = '0';
    this.errstr = '';

  }

  onClickSubmit(body) {
    console.log('body');
    console.log(body);
    this.conServ.connection(body).subscribe((data) => {
      console.log('data');

      console.log(data);
      console.log(data.status);
      if (data.status === 'success') {
        localStorage.setItem('formData', JSON.stringify(body));
        if (this.state === 'add') {
          localStorage.setItem('connectors', JSON.stringify({
            'name': 'Nexpose',
            'imageUrl': 'assets/img/nexpose.png',
            'time': new Date(),
            'status': 'active'
          }));
          this.conectionList.push({
            'connectioncardname': 'Nexpose',
            'imageUrl': 'assets/img/nexpose.png',
            'time': new Date(),
            'status': 'active'
          });
        }
        this.modalRef.hide();
        this.formdata.reset();

      }

      console.log(this.conectionList);
    },
    err => { console.log(err);
    this.errstr = 'please enter correct credentials'; }
  );
    console.log(body);
    this.isLoading = true;
  }



  ngOnInit() {
    console.log(localStorage);
    if (localStorage.getItem('connectors') != null) {
      this.conectionList.push(JSON.parse(localStorage.getItem('connectors')));
    }
    this.connectionCardList = [
      {
        'id': 1,
        'available': 1,
        'connectioncardname': 'NexPose',
        'imageUrl': 'assets/img/nexpose.png'
      },
      {
        'id': 2,
        'available': 1,
        'connectioncardname': 'Cylance',
        'imageUrl': 'assets/img/cylance.png'
      },
      {
        'id': 3,
        'available': 1,
        'connectioncardname': 'Service Now',
        'imageUrl': 'assets/img/servicenow.png'
      },
      {
        'id': 4,
        'available': 1,
        'connectioncardname': 'Jira',
        'imageUrl': 'assets/img/jira.png'
      },
      {
        'id': 5,
        'available': 1,
        'connectioncardname': 'Firemon',
        'imageUrl': 'assets/img/firemon.png'
      },
      {
        'id': 6,
        'available': 1,
        'connectioncardname': 'Syslog',
        'imageUrl': 'assets/img/syslog.png'
      },
      {
        'id': 7,
        'available': 1,
        'connectioncardname': 'Fire Eye',
        'imageUrl': 'assets/img/fireeye.jpg'
      },
      {
        'id': 8,
        'available': 1,
        'connectioncardname': 'Okta',
        'imageUrl': 'assets/img/okta.png'
      },
      {
        'id': 9,
        'available': 1,
        'connectioncardname': 'RSA Archer',
        'imageUrl': 'assets/img/rsa.jpg'
      },
      {
        'id': 10,
        'available': 1,
        'connectioncardname': 'Sailpoint',
        'imageUrl': 'assets/img/sailpoint.png'
      }
    ]
  }

}
