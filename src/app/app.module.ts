import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-auth/seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-auth/seller-add-product/seller-add-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SellerUpdateProductComponent } from './seller-auth/seller-update-product/seller-update-product.component';
import { LoginComponent } from './user-auth/login/login.component';
import { UserProfileComponent } from './user-auth/user-profile/user-profile.component';
import { ShopComponent } from './shop/shop.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { CustomFilterPipePipe } from './custom-filter-pipe.pipe';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    UserAuthComponent,
    SellerUpdateProductComponent,
    LoginComponent,
    UserProfileComponent,
    ShopComponent,
    CustomFilterPipePipe
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
