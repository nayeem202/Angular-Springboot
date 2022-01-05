import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advertise } from '../advertise/advertiseModel';
import { User } from '../signup/SignupModel';


@Component({
  selector: 'app-my-advertisement',
  templateUrl: './my-advertisement.component.html',
  styleUrls: ['./my-advertisement.component.css']
})
export class MyAdvertisementComponent implements OnInit {
  advertise: Advertise = new Advertise
    

  myAdvertising : any =[];
  
  //advertise: Advertise = this.myAdvertising

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
   
  }

  
  userM: User = JSON.parse(localStorage.getItem("current_user") as string);
  
  //Delete memberWise Advertising List
  
  getAll(){
    const header ={
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9092/getAddvertisingOfUser/'+this.userM.id, {headers: header}).subscribe(res=>{;
    console.log(res);   
    this.myAdvertising = res; 
    console.log("load passed"); 
  },  err => {
    console.log("load failed");
  })
  }

  //Delete memberWise Advertising List

  deleteAdvertise(advertise:any){
  console.log("delete button");
  this.myAdvertising.forEach((element: any) => 
  console.log(element.advertisingId));
  const headers = { 'content-Type': 'application/json' };
  this.http.delete("http://localhost:9092/deleteAdvertising/"+advertise.advertisingId,{ headers: headers })
    .subscribe(data => {
      this.getAll();
      console.log(data);
      console.log("Deleted Successfully");    
    })
}


}
