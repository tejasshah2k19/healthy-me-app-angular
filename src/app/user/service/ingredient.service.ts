import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private httpClient:HttpClient) { }


  saveIngredient(data:any):Observable<any>{
  
    return this.httpClient.post(environment.api_url+"addingredient",data)
  }

  getAllIngredients():Observable<any>{
  
    
    return this.httpClient.get(environment.api_url+"getallingredients"); 
  }
//

//

}
