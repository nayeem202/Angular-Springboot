import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  advertising: any = [];

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   

    this.activatedRoute.queryParams.subscribe(params => {
      console.log("================" + params['type']);
      this.getByType(params['type'])
     
      /*
      if((params['type']) != undefined || (params['type']) != -1 || (params['type']) != ""){
        this.getByType(params['type'])
      }
      if((params['search']) != ""){
        this.getBySearch(params['search']) 

      }if((params['search']) == "" || (params['type']) == undefined ||  (params['type']) == -1 || (params['type']) == ""){
        this.getAll();
      }
   */
      
    })
  
  } 


//Searching By Categories
getByType(type:string){
 
  const header ={
    "Content-Type": "application/json"
  };
  this.http.get('http://localhost:9092/getAddvertisingByType/'+ type, {headers: header}).subscribe(res=>{;
  console.log(res);   
  this.advertising = res; 
  console.log(this.advertising);
  
  console.log("typeWise Search success");
    
},  err => {
  console.log("typeWise Search failed");
})
}


  ////Searching By Text
  getBySearch(search: string){
    const header ={
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9092/getAddvertisingBySearch/'+ search, {headers: header}).subscribe(res=>{;
    console.log(res);   
    this.advertising = res; 
    console.log(this.advertising);
    console.log("Full Search success");
      
  },  err => {
    console.log("full Search failed");
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
