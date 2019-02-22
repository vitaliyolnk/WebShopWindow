import { Pipe, PipeTransform } from '@angular/core';
import { ImageView } from './image-view.enum';

@Pipe({
  name: 'productImageUrl'
})
export class ProductImageUrlPipe implements PipeTransform {

  transform(image_url: string, viewSwitch: ImageView): any {
    switch (viewSwitch) {
      case ImageView.thumbnail: {
        return image_url;
      }
      case ImageView.detail: {
        return image_url.replace('150', '600').replace('200', '900');
      }
    }
  }
}
