import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductSpec } from './product-spec.enum';

@Pipe({
  name: 'productRelated'
})
export class ProductRelatedPipe implements PipeTransform {

  transform(value: IProduct, specSwitch?: ProductSpec): string[] {

    if (value) {
      switch (specSwitch) {
        case ProductSpec.frame: {
          return this.getDistinct([value.frame.toString(), ...value.relatedProducts.map(rp => rp.frame.toString())]);
        }
        case ProductSpec.wheel: {
          return this.getDistinct([value.wheel.toString(), ...value.relatedProducts.map(rp => rp.wheel.toString())]);
        }
        case ProductSpec.colour: {
          return this.getDistinct([value.colour, ...value.relatedProducts.map(rp => rp.colour)]);
        }
      }
    }

    return null;
  }

  private getDistinct(inputValues: string[]): string[] {
    return Array.from(new Set(inputValues.map((item: string) => item)));
  }
}
