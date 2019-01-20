import { IProductView } from './product-view';

export interface IProductPreview extends IProductView {
    imageUrls: string[];
    colours: string[];
    frameSizes: number[];
    type: string;
    wheelSizes: number[];
}
