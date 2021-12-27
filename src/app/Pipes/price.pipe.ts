import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any = [],prices: any) {
    if(value.length === 0 || prices.length ===  0){
      return value;
    }
    const products: any = [];
    
   for(const product of value) {
      if(prices=== '279-7834' && product.pricedrop > 279 && product.pricedrop < 7834){
        products.push(product);
      }
      else if(prices === '7834-15389' && product.pricedrop > 7834 && product.pricedrop <15389){
        products.push(product);
      } 
      else if(prices === '15389-22944' && product.pricedrop > 15389 && product.pricedrop <22944){
        products.push(product);
      }
      else if(prices === '15389-22944' && product.pricedrop > 15389 && product.pricedrop <22944 || prices === '7834-15389' && product.pricedrop > 7834 && product.pricedrop <15389){
      products.push(product);
      }
      else if(prices === ' '){
      products.push(product);
      }


  }
    console.log(prices);
    return products;
  }
}
