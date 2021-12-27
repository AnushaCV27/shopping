import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from './bag/bag.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BuyRoutingModule } from './buy.routing.module';
import { HomeModule } from '../home/home.module';
@NgModule({
  declarations: [
    BagComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule, 
    HomeModule
  ],
  exports:[
    BagComponent,
    WishlistComponent
  ]
})
export class BuyModule { }
