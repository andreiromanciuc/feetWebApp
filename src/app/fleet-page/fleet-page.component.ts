import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-page',
  templateUrl: './fleet-page.component.html',
  styleUrls: ['./fleet-page.component.css']
})
export class FleetPageComponent implements OnInit {
  model: CreateUser = {
    username:"test",
    email:"test@test.com",
    password:"test",
    phoneNumber: "00000",
    role:"PARTNER",
    permission:""
  };



  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

export interface CreateUser{
  username:String,
  email:String,
  password:string,
  phoneNumber:String,
  role:String,
  permission:String
}
