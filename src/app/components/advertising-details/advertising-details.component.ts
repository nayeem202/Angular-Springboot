import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisingService } from 'src/app/components2/services/advertising.service';

@Component({
  selector: 'app-advertising-details',
  templateUrl: './advertising-details.component.html',
  styleUrls: ['./advertising-details.component.css']
})
export class AdvertisingDetailsComponent implements OnInit {
 
  singleAdvertising: any;
  getMenuId: any;


  constructor(private advertisigService: AdvertisingService, private param: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuId =   this.param.snapshot.paramMap.get('id');
    this.advertisigService.getAdvertisingById(this.getMenuId).subscribe(res => {
      console.log(res);
      this.singleAdvertising  = res
    },
    err => {
      console.log(err); 
    })
  }

}
