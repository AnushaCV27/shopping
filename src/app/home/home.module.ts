import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home.routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipes/filter.pipe';
import { ColorPipe } from '../Pipes/color.pipe';
import { PricePipe } from '../Pipes/price.pipe';
import { RatingPipe } from '../Pipes/rating.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    ProductsListComponent,
    FilterPipe,
    ColorPipe,
    PricePipe,
    RatingPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports:[
    HeaderComponent,
    MainComponent,
    ProductsListComponent
  ]
})
export class HomeModule { 
  // currentItem = 'item';

  // items = [];
  // addItem(newItem: string){
  //   this.items.push(newItem);  
  // }
}
