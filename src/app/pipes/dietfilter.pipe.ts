import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietfilter'
})
export class DietfilterPipe implements PipeTransform {
  transform(products: any, type: string): any {
    if(type=="All")
       return products;
    return products.filter((x:any)=>x.category == type)
  }
}