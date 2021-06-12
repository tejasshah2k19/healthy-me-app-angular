import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) { 
    this.myForm = new FormGroup({
      firstName:new FormControl(),
       email:new FormControl(),
       password:new FormControl()
      
    });

  }
  myForm:FormGroup
  ngOnInit(): void {
  }
  saveUser(){
    
    console.log("user data => ",this.myForm.value);
    
    this.sessionService.saveUser(this.myForm.value).subscribe(resp=>{
      console.log(resp);
      this.toastr.success(resp.msg,"",{timeOut:3000})
      this.router.navigateByUrl("/login")
    })    
  }

}
