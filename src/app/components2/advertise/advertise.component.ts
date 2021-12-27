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
  advertise : Advertise = new Advertise();

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }


  ngOnInit(): void {

  }


   userM : User = JSON.parse(localStorage.getItem("current_user") as string) ;
  
  



  save(){
    



     this.toastr.success("Successfully Published")
    
   
    
    this.advertise.user =this.userM;
    console.log(this.advertise);
    
   
    this.submitted = true;
    const headers = {'content-Type' : 'application/json' }; 
    this.http.post("http://localhost:9092/saveadvertising",JSON.stringify(this.advertise),{headers:headers}).subscribe(data=>{
      console.log(data);
    })

    console.log(this.advertise.location);

  }

   
 
  
   


}
