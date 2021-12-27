import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';

@Pipe({
  name: 'filter',

})
export class FilterPipe implements PipeTransform {

  transform(value: any = [], filteredString: any) {
    if(value.length === 0 || filteredString === ''){
      return value;
    }

    const products: any = [];
    
   for(const product of value) {
      if(product['title'].toLowerCase().indexOf(filteredString.toLowerCase()) !== -1){
        products.push(product);
      }
      
      
    }
    console.log(products);
    return products;
  }
}
