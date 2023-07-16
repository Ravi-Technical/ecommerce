import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/@core/seller.service';
import { addProductInterface } from 'src/app/data-type';
 
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

   errHandle = new EventEmitter<boolean>(false);

   errMessage:string = "";

  constructor(private sellerService:SellerService, private router:Router) { }

  ngOnInit(): void {
  }


  addProduct(data:addProductInterface){
     this.sellerService.addProductService(data).subscribe((res)=>{
         if(res){
          this.router.navigate(['/seller-home']);
         } else {
            this.sellerService.isError.subscribe((isError)=>{
              this.errMessage = "Something went wrong!...";
            })
         }
     })
  }

}
