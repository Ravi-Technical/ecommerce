import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../@core/welcome.service';
import { Options } from 'ngx-slider-v2';
import { products } from '../data-type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  productSize = ["S", "M", "XL", "XXL", "L"];

  productBrands: [] = [];

  search: any;

  sliderRangeValues: Array<number> = [0, 1000];

  highValue: number = 1000;

  lessValue: number = 0;

  product: Array<products> = [];

  categories: any[] = [];

  //filteredProducts:Array<products> = [];

  colors: [] = [];

  options: Options = {
    floor: 0,
    ceil: 1000
  };

  isSelected: boolean = false;

  ProductsList: any[] = [];

  localProduct: any[] = [];

  catFiltered: any[] = [];

  tempProducts: any[] = [];

  filtredBrands: any[] = [];

  storeBrand: any[] = [];

  tempBrand: any[] = [];

  newStoredBrands: any[] = [];

  temp: any[] = [];

  constructor(private welcome: WelcomeService) { }

  ngOnInit(): void {

    this.welcome.getProducts().subscribe((data: any) => {

      this.ProductsList = data

      this.product = data;

      //console.log(" this.ProductsList ", this.ProductsList);

      //console.log(" this.product ", this.product);

    });

    this.welcome.getCategory().subscribe((res: any) => {
      this.categories = res;
    });

    this.welcome.getBrands().subscribe((brand: any) => {
      this.productBrands = brand;
    })

  }

  getCat(event: any) {

    let checkTrueFalse: boolean = event.target.checked;

    if (checkTrueFalse) {

      this.ProductsList = [];

      console.log(event.target.value);

      this.localProduct.push(event.target.value);

      this.localProduct.forEach((x) => {

        let arr = this.product.filter((e: any) => e.category == x);

        this.ProductsList = [...this.ProductsList, ...arr];

      });

      this.catFiltered.push(this.ProductsList);

    } else if (!checkTrueFalse) {

      this.tempProducts.push(event.target.value);

      if (this.tempProducts.length > 0) {

        this.tempProducts.forEach((el) => {

          const index = this.ProductsList.findIndex(ele => ele.category === el);
          console.log(" index == ", index);
          if (index !== -1) {
            this.ProductsList.splice(index, 1);
            console.log(this.ProductsList);
          }
          if (this.ProductsList.length == 0) {
            this.tempProducts = [];
            this.localProduct = [];
            this.ProductsList = this.product;
          }
        })
      }
    }
  }  // Category Filter Method

  getBrand(event: any) {
    if (event.target.checked) {
      this.storeBrand.push(event.target.value);
      this.newStoredBrands = this.storeBrand.filter((item, index) => this.storeBrand.indexOf(item) == index);
      console.log(" Find & remove dublicate array of element == ", this.newStoredBrands);
      this.ProductsList = [];
      this.newStoredBrands.forEach((x) => {
        let filteredBrand = this.product.filter((data) => data.brand == x);
        this.ProductsList = [...this.ProductsList, ...filteredBrand];
      })
    } else if (!event.target.checked) {

      this.tempBrand = [];
      this.tempBrand.push(event.target.value);
      console.log("uncheck", this.ProductsList);
      if (this.tempBrand.length > 0) {
        this.tempBrand.forEach((x) => {
          const brandIndex = this.ProductsList.findIndex((indexEle) => indexEle.brand == x);
          console.log("brand Index ", brandIndex);
          if (brandIndex !== -1) {
            this.ProductsList.splice(brandIndex, 1);
          } else if (brandIndex == -1) {
            this.ProductsList;
          }
          if (this.ProductsList.length == 0) {
            this.tempBrand = [];
            this.storeBrand = [];
            this.ProductsList = [];
            this.ProductsList = this.product;
          }

        })
      }
    }

  } // Barnd Filter

  applyFilter() {
    this.ProductsList = this.product.filter((product) => {
      return (
        product.price >= this.sliderRangeValues[0] &&
        product.price <= this.sliderRangeValues[1]
      );
    });
    //console.log("Filtered Products = ", this.ProductsList);
  }

  clearFilter() {
    this.localProduct = [];
    this.catFiltered = [];
    this.ProductsList = this.product;
  }


  handlePrice() {
    this.applyFilter();
  }


  // { "label": "Toys", "selected": false },
  // { "label": "Cloth", "selected": false },
  // { "label": "Electronics", "selected": false },
  // { "label": "Laptop", "selected": false },
  // { "label": "Watch", "selected": false }


} //******************************* END CLASS HERE
