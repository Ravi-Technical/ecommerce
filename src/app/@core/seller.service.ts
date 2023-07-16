import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { addProductInterface, sellLogin, sellSignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  isError = new EventEmitter<boolean>(false);

  constructor(private _http: HttpClient, private router: Router) { }

  userSignUp(data: sellSignUp) {
    this._http.post('http://localhost:3000/seller', data, { observe: "response" }).subscribe((result) => {
      if (this.isSellerLoggedIn) {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }  else {
        this.isError.emit(true);
      }

    });

  }

  userLogin(data: sellLogin) {
  
    this._http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, 

    { observe: 'response' }).subscribe((result:any) => {
        if(result && result.body && result.body.length){
          this.isSellerLoggedIn.next(true);  
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        } else {
           this.isError.emit(true);
        }

    });

  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.router.navigate(['seller-home']);
    }
  }

  addProductService(item:addProductInterface){
   return this._http.post('http://localhost:3000/products', item);
  }

  allProducts(){
    return this._http.get('http://localhost:3000/products');
  }

  deleteProduct(id:number){
   return this._http.delete(`http://localhost:3000/products/${id}`);
  }
  
  updateProduct(product:addProductInterface){
   return this._http.put(`http://localhost:3000/products/${product.id}`, product);
  }
 
  getProduct(id:string){
    return this._http.get<addProductInterface>(`http://localhost:3000/products/${id}`)
  }


} // END CLASS HERE
