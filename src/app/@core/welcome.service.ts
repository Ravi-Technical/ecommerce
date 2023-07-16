import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private _http:HttpClient) { }


   getProducts(){
    return this._http.get("http://localhost:3000/products");  
   }

   getCategory(){
    return this._http.get("http://localhost:3000/category");
   }

   getBrands(){
    return this._http.get("http://localhost:3000/brands");
   }



}
