import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { HomeRoutingModule } from '../home/home.routing.module';
import { HeaderComponent } from '../home/header/header.component';


const routes: Routes = [
  {path: 'bag', component: BagComponent},
  {path: 'wishlist', component: WishlistComponent},
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }