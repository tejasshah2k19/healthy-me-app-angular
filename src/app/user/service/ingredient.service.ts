import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private httpClient: HttpClient) { }


  saveIngredient(data: any): Observable<any> {

    // let headers =  new HttpHeaders();//String s ="royal" or String s ="royal".toUpperCase()
    // let authToken = localStorage.getItem('authToken') as string
    // headers.set('authToken',authToken)// s.toUpperCase() 
    // //s ==> 

    // let authToken = localStorage.getItem('authToken') as string
    // let headers = new HttpHeaders().set('authToken', authToken)
    return this.httpClient.post(environment.api_url + "api/ingredient", data)
  }



  getAllIngredients(): Observable<any> {
    // let authToken = localStorage.getItem('authToken') == null ? "" : localStorage.getItem('authToken') as string
    // console.log("authToken => ", authToken)
    // let headers = new HttpHeaders().set('authToken', authToken)
    return this.httpClient.get(environment.api_url + "api/ingredients");
  }
  //
  //DRY -- interceptor --http -->http interceptor 

  //

}
