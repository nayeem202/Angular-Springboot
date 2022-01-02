import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-ad-header',
  templateUrl: './ad-header.component.html',
  styleUrls: ['./ad-header.component.css']
})
export class AdHeaderComponent implements OnInit {

  constructor(private route: Router, private services: StorageService) { }

  ngOnInit(): void {
  }



  logout(){
    this.services.logout();
    this.route.navigateByUrl("login");
  }

  

    
}
