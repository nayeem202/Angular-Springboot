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
  type = "Choose your House type";
  search="";

  advertising: any = [];
  


  constructor(private route: Router,  private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  memberLogin(){
  this.route.navigateByUrl("admin");
  }



  getCategoriseAdvertise(){
    this.route.navigate(['/'],{queryParams: {type:this.type}})
  }


  getSearchingAdvertise(){ 
    this.route.navigate(['/'],{queryParams: {search:this.search}})
  }

  
  



}
