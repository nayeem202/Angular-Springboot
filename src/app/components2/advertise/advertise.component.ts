import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advertise } from './advertiseModel';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  submitted = false;
  advertise : Advertise = new Advertise();

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }




  ngOnInit(): void {
  }



  save(){
    
    this.toastr.success("Successfully Published")
    this.submitted = true;
    const headers = {'content-Type' : 'application/json' }; 
    this.http.post("http://localhost:9092/saveadvertising",JSON.stringify(this.advertise),{headers:headers}).subscribe(data=>{
      console.log(data);
    })

    console.log(this.advertise.location);
    
    
    
  }



}
