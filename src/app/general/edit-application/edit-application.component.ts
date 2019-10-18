import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { editApplication } from '../../shared/interface/edit-application.interface'

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {

  editApplication: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  jenkins = new FormControl();
  goCd = new FormControl();
  nodes = new FormControl();
  serverDependencies = new FormControl();

  jenkinsList: string[] = ['Alten_cl1 - Jenkins', 'AMS_HTTP_PROD - Jenkins', 'AMS_cl1 - Jenkins', 'AMS_cl2 - Jenkins'];
  goCdList: string[] = ['AMS_gocd_prod - Gocd', 'Alten_gocd_job1 - Gocd', 'AMS_gocd_start - Gocd', 'AMS_gocd_test_e2e - Gocd'];
  nodesList: string[] = ['AMS_prod_container - Server', 'Jenkins_server1 - Server', 'Postgres_server1 - Server', 'Postgres_server_prod2 - Server'];
  serverDependenciesList: string[] = ['KeyCloak_HTTP - Service_dependency', 'Postgres_prod_AMS - Service_dependency',
                                         'Postgres1_sentry_db1 - Service_dependency', 'Postgres_test_AMS_e2e - Service_dependency'];

  ngOnInit() {
    this.editApplication = this.formBuilder.group({
      'applicationName': ['', [Validators.required]],
      'services': ['', Validators.required],
    });
  }

  get applicationName(){
    return this.editApplication.get('applicationName')
  }

  get services(){
    return this.editApplication.get('services')
  }

}
