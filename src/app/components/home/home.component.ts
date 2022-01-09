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
    //this.getAll();

    this.activatedRoute.queryParams.subscribe(params => {
      console.log("================" + params['type']);
      
      if((params['type']) == undefined){
        this.getAll();
      }else{
        this.getByType(params['type'])
      }
    })

  
    // let headerC = new HeaderComponent(this.route, this.http, this.toastr);
    // this.advertising = headerC.getCategoriseAdvertise();
    //this.getByType(params['type'])
  }


getByType(type:string){
 
  const header ={
    "Content-Type": "application/json"
  };
  this.http.get('http://localhost:9092/getAddvertisingByType/'+ type, {headers: header}).subscribe(res=>{;
  console.log(res);   
  this.advertising = res; 
  console.log(this.advertising);
  
  console.log("load passed");
    
},  err => {
  console.log("load failed");
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
