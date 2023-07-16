import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-auth/seller-home/seller-home.component';
import { SellerAuthGuard } from './@core/seller-auth.guard';
import { SellerAddProductComponent } from './seller-auth/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-auth/seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserGuard } from './@core/user.guard';
import { UserProfileComponent } from './user-auth/user-profile/user-profile.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'seller-auth', component: SellerAuthComponent },

  { path: 'seller-home', canActivate: [SellerAuthGuard], component: SellerHomeComponent },

  { path: 'seller-add-product', canActivate: [SellerAuthGuard], component: SellerAddProductComponent },

  { path: 'seller-update-product/:id', canActivate: [SellerAuthGuard], component: SellerUpdateProductComponent },
  
  { path: 'user-auth', component: UserAuthComponent },
  
  { path: 'user-profile', canActivate:[UserGuard], component: UserProfileComponent },
  
  { path: 'shop', component: ShopComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
