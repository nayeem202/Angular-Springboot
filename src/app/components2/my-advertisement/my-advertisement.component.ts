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
  isSave : boolean = true
  myAdvertising : any;
  
  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();  
  }

  
  userM: User = JSON.parse(localStorage.getItem("current_user") as string);
  
  
  
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

  const headers = { 'content-Type': 'application/json' };
  this.http.delete("http://localhost:9092/deleteAdvertising/"+advertise.advertisingId,{ headers: headers })
    .subscribe(data => {
      this.getAll();
      console.log(data);
      this.toastr.error("Successfully Deleted")
      console.log("Deleted Successfully");    
    })
}

    editAdvertise(advertise: any) {  
    this.advertise.advertisingId = advertise.advertisingId;
    console.log(this.advertise.advertisingId);

    this.advertise.location = advertise.location;
    this.advertise.type = advertise.type;
    this.advertise.status = advertise.status;
    this.advertise.bedrooms = advertise.bedrooms;
    this.advertise.bathrooms = advertise.bathrooms;
    this.advertise.price = advertise.price;
    this.advertise.sqft = advertise.sqft;
    this.advertise.additionalinformation = advertise.additionalinformation;
    this.advertise.images = advertise.images;
    this.advertise.user = advertise.user;
    this.route.navigate(['/admin/advertise'], { state: {add : advertise, isSave: false}})
  }



}
