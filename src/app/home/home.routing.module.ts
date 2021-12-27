import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProductsListComponent } from './products-list/products-list.component';



const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'products-list', component: ProductsListComponent},
  {path: 'main', component: MainComponent},
  {path: '', component:MainComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
