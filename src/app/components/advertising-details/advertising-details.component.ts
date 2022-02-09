import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/components2/my-advertisement/contactModel';
import { AdvertisingService } from 'src/app/components2/services/advertising.service';


@Component({
  selector: 'app-advertising-details',
  templateUrl: './advertising-details.component.html',
  styleUrls: ['./advertising-details.component.css'],

})
export class AdvertisingDetailsComponent implements OnInit {
  

  contact: Contact = new Contact();
  singleAdvertising: any;
  getMenuId: any;
  adSearching: any;

  location = "Location";
  minprice = "Min Price";
  maxprice = "Max Price";
  type = "House Type";
  minsqft = "Min Sqft";
  maxsqft = "Max Sqft"
  status = "Status";
  bedrooms = "Bedrooms"
  bathrooms = "Bathrooms";

  title = 'Location';
  lat : number = 23.847815;
  lng : number = 90.368778;

  

  constructor(private route: Router, private advertisigService: AdvertisingService, private param: ActivatedRoute, private http: HttpClient, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    this.advertisigService.getAdvertisingById(this.getMenuId).subscribe(res => {
      console.log(res);
      this.singleAdvertising = res
      this.lat = this.singleAdvertising.lat;
      this.lng = this.singleAdvertising.lng;
      console.log(this.lat);
      console.log(this.lng);
      
    },
      err => {
        console.log(err);
      })
  }

  getAdvancedSearching() {

    this.adSearching = [this.location, this.minprice, this.maxprice
      , this.minsqft, this.maxsqft, this.type, this.status, this.bedrooms, this.bathrooms
    ]

    console.log(this.adSearching);
    this.route.navigate(['/'], {
      queryParams: { adSearching: this.adSearching },
    })
  }

  to: any
  subject: any
  message: any
  mail: object = {}

  sendingEmailToOwner() {

    this.to = this.singleAdvertising.user.email
    this.subject = "Someone wants to connect with you For House Rent"
    this.message = JSON.stringify(this.contact);

    this.mail = { to: this.to, subject: this.subject, message: this.message }

    console.log(this.mail);
    console.log(this.contact);

    console.log(this.contact.renteremail);
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:9092/send_amail", JSON.stringify(this.mail), { headers: headers }).subscribe(data => {

      console.log(data);
      this.toastr.success("Your mail Successfully sent to House Owner")
    }, err => {

      console.log("error");
      this.toastr.error("This message can't be sent right now. Please try again later")
    })




  }



}
