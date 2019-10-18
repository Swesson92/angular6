import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  addService: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addService = this.formBuilder.group({
      'serviceName': ['', [Validators.required]],
      'serviceType': ['', Validators.required],
      'serviceAddress': ['', Validators.required],
      'samplingType': ['',Validators.required],
      'matchType': ['', Validators.required]
    });
  }

      get serviceName(){
         return this.addService.get('serviceName')
      }

      get serviceType(){
        return this.addService.get('serviceType')
      }
    
      get serviceAddress(){
        return this.addService.get('serviceAddress')
      }
    
      get samplingType(){
        return this.addService.get('samplingType')
      }
    
      get matchType(){
        return this.addService.get('matchType')
      }
    

  }