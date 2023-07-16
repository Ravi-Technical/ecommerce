import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/@core/seller.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})

export class SellerHomeComponent implements OnInit {

  storeMessage:any[] = [];

  successMessage:string | undefined = "";

  constructor(private sellerService:SellerService) { }

  ngOnInit(): void {
   this.displayProducts();
  }

  displayProducts(){
    this.sellerService.allProducts().subscribe((products:any)=>{
      this.storeMessage = products;
    });
  }

  deleteItem(id:number){
     this.sellerService.deleteProduct(id).subscribe((response)=>{
      this.displayProducts();
      this.successMessage = "Product has been deleted Successfully!";
      setTimeout(()=>{this.successMessage = undefined}, 3000);
     })
  }

 
 




} //END CLASS HERE
