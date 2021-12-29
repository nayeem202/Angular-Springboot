import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../signup/SignupModel';
import { Advertise } from './advertiseModel';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  submitted = false;
  advertise: Advertise = new Advertise();
  fileToUpload: any;
  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }


  ngOnInit(): void {

  }


  userM: User = JSON.parse(localStorage.getItem("current_user") as string);


  fileChange(files: any) {debugger;
    this.fileToUpload = files.files[0]
  }


  save() {debugger;
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
      }, err => {
        this.toastr.error("Post failed")
      })

    console.log(this.advertise.location);

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

    console.log(this.advertise.location);

  }







}
