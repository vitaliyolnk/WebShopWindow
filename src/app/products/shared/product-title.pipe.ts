import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTitle'
})
export class ProductTitlePipe implements PipeTransform {

  transform(product: any, args?: any): any {
    const result = [product.model, product.frame, product.wheel];
    return result.join(' ');
  }
}
