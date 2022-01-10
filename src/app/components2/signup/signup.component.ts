import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './SignupModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  submitted = false;
  user : User = new User();

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  signin(){
    this.route.navigateByUrl("login");


  }

    check(){
      console.log(this.user);

    }

  save(){
   
    
    this.toastr.success("Successfully Registered")
    this.submitted = true;
    const headers = {'content-Type' : 'application/json' }; 
    this.http.post("http://localhost:9092/saveUser",JSON.stringify(this.user),{headers:headers}).subscribe(data=>{
      console.log(data);
    })

    this.resetSignup();
    
    
  }
  
  resetSignup(){
    this.user.name = "";
    this.user.email="";
    this.user.username="";
    this.user.password=""; 
  }




}
