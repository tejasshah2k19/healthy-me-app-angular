import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  constructor(private igService:IngredientService,private toastr:ToastrService) { }

  ingredients:Array<any> = []
  ngOnInit(): void {
    console.log("before subscribe...")

    this.igService.getAllIngredients().subscribe(resp=>{
      if(resp.status == 200){ 
        this.ingredients = resp.data
      }else if(resp.status == -1){
        console.log(resp)
        this.toastr.error(resp.msg,"",{timeOut:3000})
      }
      console.log("after subscribe....")
    })
  }

}
