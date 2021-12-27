import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';
import { User } from '../signup/SignupModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService, private storageService: StorageService, private toastr: ToastrService) { 
    this.formGroup = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    var isLoggedIn = this.storageService.isLoggedIn();
    if(isLoggedIn) this.route.navigate(['/admin']);
  }
  get f(){
    return this.formGroup.controls;
  }

    st : any ;
  onSubmit(){
    
    this.submitted = true;
   this.loginService.login(this.formGroup.value)
   .subscribe(res => {
    this.st = this.storageService.saveLoginInfo(res.data);
    this.route.navigate(['/admin']);
    this.toastr.success("Successfully Login")
   }, err => {
    this.toastr.error("Opps ! Login Failed")
     console.log(err);
     this.route.navigate(['/login']);
   })
  }












  signup(){

    this.route.navigateByUrl("signup");

  }




}
