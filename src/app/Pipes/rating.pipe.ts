import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: any = [],ratings: any []) {
    if(value.length === 0 || ratings.length === 0){
      return value;
    }
    const products: any = [];
    
   for(const product of value) {
     if(product.rating.rate > ratings){
        products.push(product);
      } 
    }
    
    return products;
  }
   
}
