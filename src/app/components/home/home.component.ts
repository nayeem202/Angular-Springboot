import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  advertising : any =[];

  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    const header ={
      "Content-Type": "application/json"
    };

    this.http.get('http://localhost:9092/getAddvertising', {headers: header}).subscribe(res=>{;
    console.log(res);   
    this.advertising = res; 
    console.log(this.advertising.location);
    console.log("load passed");
      
  },  err => {
    console.log("load failed");
    
   
  })
  }


}
