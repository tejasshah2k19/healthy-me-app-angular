import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  myForm: FormGroup
  ngOnInit(): void {

  }
  login() {
    this.sessionService.authenticate(this.myForm.value).subscribe(resp => {
      console.log(resp)

      if (resp.status == 200) {
        this.toastr.success(resp.msg, "", { timeOut: 3000 })
        if (resp.data.roleId == 2) {
          localStorage.setItem("firstName", resp.data.firstName)
          localStorage.setItem("authToken", resp.data.authToken)
          this.router.navigateByUrl("/user/home")
        } else if (resp.data.roleId == 1) {
        } else {

        }

      } else if (resp.status == -1) {
        this.toastr.error(resp.msg, "", { timeOut: 3000 })
      }
    })
  }
}
