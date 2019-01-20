import { IProductView } from './product-view';
import { IFilterGroup } from './filter-group';

export interface IResults {
    products: IProductView[];
    filters: IFilterGroup[];
}
