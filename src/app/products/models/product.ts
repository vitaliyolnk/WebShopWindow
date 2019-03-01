import { IProductView } from './product-view';

export interface IProduct extends IProductView {
    features: string;
    relatedProducts: IProductView[];
}
