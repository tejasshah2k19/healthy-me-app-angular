import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  myForm: FormGroup
  constructor(private igService:IngredientService,private router:Router) {

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

  saveIngredient(){
    
    this.igService.saveIngredient(this.myForm.value).subscribe(resp=>{
      console.log(resp)
      if(resp.status == 420){
        this.router.navigateByUrl("/login")
      }else{
        alert("done")
      }
    })

  }
}
