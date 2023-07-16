import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from 'src/app/@core/seller.service';
import { addProductInterface } from 'src/app/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  @ViewChild('myForm', {static: false}) myForm: NgForm | undefined

  productData: undefined | addProductInterface

  successMessage: string | undefined;

  constructor(private router: ActivatedRoute, private sellerService: SellerService, private route:Router) { }

  ngOnInit(): void {

    let product_Id = this.router.snapshot.paramMap.get('id');

    product_Id && this.sellerService.getProduct(product_Id).subscribe((result) => {

      this.productData = result;

    })

  }


  updateProduct(data: addProductInterface) {
         if(this.productData?.id){
          data.id = this.productData.id;
         }
        this.sellerService.updateProduct(data).subscribe((res)=>{
          if(res){
            this.successMessage = "Product has been updated successfully!";
          } else {
            this.successMessage = "Something went wrong! please try again";
          }
     
          setTimeout(()=>{this.successMessage = undefined}, 3000)});
          
        this.route.navigate(['seller-home']);

  }





}
