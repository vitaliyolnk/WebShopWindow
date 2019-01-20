import {IFilter} from './filter';

export interface IFilterGroup {
    groupName: string;
    filters: IFilter[];
}
