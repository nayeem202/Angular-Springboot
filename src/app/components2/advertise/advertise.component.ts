import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { User } from '../signup/SignupModel';
import { Advertise } from './advertiseModel';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  user : User = new User();
  submitted = false;
  advertise: Advertise = new Advertise();
  isSave: boolean = true

  fileToUpload: any;
  advertising: any = [];

  constructor(private route: Router,  private http: HttpClient, private toastr: ToastrService) { }

  

  ngOnInit(): void {
    
    if (history.state.isSave != undefined) {
      this.advertise = history.state.add
      this.isSave = history.state.isSave
    }


  }

 

  userM: User = JSON.parse(localStorage.getItem("current_user") as string);


  // for sending Messaage
  subject = "Confirmation Mail"
  message = " Congratulations your Post is  Published"
  to = this.userM.email

  
  mail = { to :this.to , subject: this.subject , message : this.message}
  

  sendMail(){
    this.submitted = true;
    const headers = {'content-Type' : 'application/json' }; 
    this.http.post("http://localhost:9092/send_amail",JSON.stringify(this.mail),{headers:headers}).subscribe(data=>{

    console.log(data);
    }, err => {
     console.log("error");
     
    })

  }
  


  fileChange(files: any) {
    debugger;
    this.fileToUpload = files.files[0]
  }




  save() {
    debugger;
    const formData: FormData = new FormData();
    formData.append('location', this.advertise['location']);
    formData.append('type', this.advertise['type']);
    formData.append('status', this.advertise['status']);
    formData.append('bedrooms', this.advertise['bedrooms'].toString());
    formData.append('bathrooms', this.advertise['bathrooms'].toString());
    formData.append('price', this.advertise['price'].toString());
    formData.append('sqft', this.advertise['sqft'].toString());
    formData.append('additionalinformation', this.advertise['additionalinformation']);
    formData.append('user_id', this.userM['id'].toString());
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    this.submitted = true;

    this.http.post("http://localhost:9092/saveadvertising_withfile", formData)
      .subscribe(res => {
        console.log(res);
        this.toastr.success("Successfully Published")
        this.sendMail();
      }, err => {
        
        this.toastr.error("Post failed")
      })

    console.log(this.advertise.location);

  }





    updateAdvertise() {

    const formData: FormData = new FormData();

    formData.append('advertisingId', this.advertise['advertisingId'].toString());
    formData.append('location', this.advertise['location']);
    formData.append('type', this.advertise['type']);
    formData.append('status', this.advertise['status']);
    formData.append('bedrooms', this.advertise['bedrooms'].toString());
    formData.append('bathrooms', this.advertise['bathrooms'].toString());
    formData.append('price', this.advertise['price'].toString());
    formData.append('sqft', this.advertise['sqft'].toString());
    formData.append('additionalinformation', this.advertise['additionalinformation']);
    formData.append('user_id', this.userM['id'].toString());
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    this.submitted = true;

    
    
 
    this.http.post("http://localhost:9092/updateadvertising", formData)
      .subscribe(res => {
        console.log(res);
        this.toastr.success("Successfully Updated")
      }, err => {
        this.toastr.error("Updated failed")
      })

  
  }

  savebackup() {
    this.toastr.success("Successfully Published")
    this.advertise.user = this.userM;
    console.log(this.advertise);

    this.submitted = true;
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:9092/saveadvertising", JSON.stringify(this.advertise), { headers: headers })
      .subscribe(data => {
        console.log(data);
      })
  }

  getAll() {
    const header = {
      "Content-Type": "application/json"
    };

    this.http.get('http://localhost:9092/getAddvertising', { headers: header }).subscribe(res => {
      ;
      console.log(res);
      this.advertising = res;
      console.log(this.advertising.location);
      console.log("load passed");

    }, err => {
      console.log("load failed");
    })
  }


}
