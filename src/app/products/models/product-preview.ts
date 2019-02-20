import { IProductView } from './product-view';

export interface IProductPreview extends IProductView {
    image_url: string;
    type: string;
}
