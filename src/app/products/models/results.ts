import { IProductView } from './product-view';
import { IFilterGroup } from './filter-group';
import { IPagingView } from './paging-view';

export interface IResults {
    products: IProductView[];
    paging: IPagingView;
}

export interface ICategories {
    categories: IFilterGroup[];
}
