import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { PricePipe } from './Pipes/price.pipe';
import { RatingPipe } from './Pipes/rating.pipe';
import { ColorPipe } from './Pipes/color.pipe';
//import {fas} from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PricePipe,
    RatingPipe,
    ColorPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
