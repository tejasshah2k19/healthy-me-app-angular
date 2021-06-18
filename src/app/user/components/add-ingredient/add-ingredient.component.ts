import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  myForm: FormGroup
  constructor(private igService:IngredientService,private router:Router,private toastr:ToastrService) {

    this.myForm = new FormGroup({
      active: new FormControl(1),
      description: new FormControl("demo"),
      effects: new FormControl("demo"),
      name: new FormControl(),
      notConsumeBy: new FormControl("demo"),
      source: new FormControl("demo")
    })
  }

  ngOnInit(): void {

  }
  statusResp =undefined 
  saveIngredient(){
    
    this.igService.saveIngredient(this.myForm.value).subscribe(resp=>{
      if(resp.status == 200){
         this.toastr.success(resp.msg,"",{timeOut:3000})
         this.router.navigateByUrl("/user/home")
      }else if(resp.status == -1){
        this.toastr.error(resp.msg,"",{timeOut:3000})
      }
    })

  }
}
