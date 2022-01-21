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



  location="";
  minprice="";
  maxprice="";
  type = "";
  minsqft="";
  maxsqft=""
  status="";
  bedrooms=""
  bathrooms="";


  constructor(private route: Router, private http: HttpClient, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.activatedRoute.queryParams.subscribe(params => {

      if (params['search'] != undefined) {
        this.getBySearch(params['search'])
        console.log("========search========" + params['search']);
      }
      else if ((params['type'] == undefined)) {
        this.getAll();
        console.log("==========" + this.getAll());

      }
      else if (params['type'] != "" || params['type'] != -1) {
        this.getByType(params['type'])
        console.log("=======type=========" + params['type']);
      }
    })

  }


  //Searching By Categories
  getByType(type: string) {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9092/getAddvertisingByType/' + type, { headers: header }).subscribe(res => {
      ;
      console.log(res);
      this.advertising = res;
      console.log(this.advertising);

      console.log("typeWise Search success");

    }, err => {
      console.log("typeWise Search failed");
    })
  }


  ////Searching By Text
  getBySearch(search: string) {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9092/getAddvertisingBySearch/' + search, { headers: header }).subscribe(res => {
      ;
      console.log(res);
      this.advertising = res;
      console.log(this.advertising);
      console.log("Full Search success");

    }, err => {
      console.log("full Search failed");
    })
  }


  getAll() {
    const header = {
      "Content-Type": "application/json"
    };

    this.http.get('http://localhost:9092/getAddvertising', { headers: header }).subscribe((res)  => {
      console.log(res);
      this.advertising = res;
      console.log("load passed");

    }, err => {
      console.log("load failed");


    })
  }


  //get Advanced searching
  getAdvancedSearching() { 
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9092/getAdvancedSearching/'+this.location+'/'+
    this.minprice+'/'+this.maxprice+'/'+this.minsqft+'/'+this.maxsqft+'/'+this.type+'/'+this.status+'/'+this.bedrooms+'/'+this.bathrooms, { headers: header }).subscribe(res => {
      ;
      console.log(res);
      this.advertising = res;
      console.log(this.advertising);

      console.log("Advanced Search success");

    }, err => {
      console.log("advanched Search failed");
    })
 
  
  }

  memberLogin(){
    this.route.navigateByUrl("admin");
    }
  



}
