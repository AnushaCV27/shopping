import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, color:any){
    if(value.length === 0 || color === ''){
      return value;
    }

    const products: any = [];
    
   for(const product of value) {
      if(product['color'] === color){
        products.push(product);
      }
      
      
    }
    console.log(products);
    return products;
  }
}
