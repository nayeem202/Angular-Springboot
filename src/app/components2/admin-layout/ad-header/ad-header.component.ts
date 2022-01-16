import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../../services/storage.service';
import { User } from '../../signup/SignupModel';

@Component({
  selector: 'app-ad-header',
  templateUrl: './ad-header.component.html',
  styleUrls: ['./ad-header.component.css']
})
export class AdHeaderComponent implements OnInit {
  user : User = new User();
  currentUser : any;


  constructor(private route: Router, private services: StorageService, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getId();
  }



  logout(){
    this.services.logout();
    this.route.navigateByUrl("login");
  }

  getuser: User = JSON.parse(localStorage.getItem("current_user") as string);  

  
  getId() {
    const header = {
      "Content-Type": "application/json"
    };

    this.http.get('http://localhost:9092/getUser/'+this.getuser.id, { headers: header }).subscribe(res => {
      ;
      this.currentUser = res;
      console.log(res);
      console.log("Get Current Usr");

    }, err => {
      console.log("Failed to get current user");
    })
  }
 
}
