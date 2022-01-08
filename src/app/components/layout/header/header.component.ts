import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  type = "";

  advertising: any = [];
  


  constructor(private route: Router,  private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  memberLogin(){
  this.route.navigateByUrl("admin");
  }



  getCategoriseAdvertise(){
    
    
  //   console.log(this.type);
  //   const header ={
  //     "Content-Type": "application/json"
  //   };
  //   this.http.get('http://localhost:9092/getAddvertisingByType/'+ this.type, {headers: header}).subscribe(res=>{;
  //   console.log(res);   
  //   this.advertising = res; 
  //   console.log(this.advertising);
    
  //   console.log("load passed");
      
  // },  err => {
  //   console.log("load failed");
  // })

  }

  


  




}
