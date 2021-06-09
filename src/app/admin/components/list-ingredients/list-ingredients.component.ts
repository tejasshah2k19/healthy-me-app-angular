import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent implements OnInit {

  constructor() { }
  user:string =""

  ngOnInit(): void {
   this.user  = localStorage.getItem("user") as string
  }

}
