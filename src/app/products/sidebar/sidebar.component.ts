import { Component, OnInit, Input} from '@angular/core';
import { Router, NavigationExtras, ParamMap } from '@angular/router';
import { IFilterGroup } from '../models/filter-group';
import { ISelectedFilters } from '../models/selected-filters';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    @Input() filterList: IFilterGroup[];
    selectedFiltersList: ISelectedFilters[];
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.selectedFiltersList = new Array<ISelectedFilters>();
        this.setUpFilters();
    }

    /** Populates selected filters if results
    * the page is accessed directly via URL
    */
    private setUpFilters() {
        this.filterList.forEach(fl => {
            if (fl.filters.some(f => f.isSelected)) {
                const selected = fl.filters.filter(f => f.isSelected);
                this.selectedFiltersList.push({ groupName: fl.groupName,
                    selectedFilters: selected.map(fld => +fld.id) });
            }
        });
    }

    /** Apply filters */
    filterResults(filterGroupName: string, selectionId: string, isSelected: boolean) {
        if (isSelected) {
            // check if the same filter group has been selected
            // and add selected value to the group
            if (this.selectedFiltersList.length === 0
                || !this.selectedFiltersList.some(sf => sf.groupName === filterGroupName)) {
                this.selectedFiltersList.push({ groupName: filterGroupName, selectedFilters: [+selectionId] });
            } else {
                this.selectedFiltersList.find(sf => sf.groupName === filterGroupName).selectedFilters.push(+selectionId);
            }
        } else {
            // remove a single value of the deselected filter from
            // the matching group
            const matchingFilterGroup = this.selectedFiltersList
                .find(sf => sf.groupName === filterGroupName);

            const index = matchingFilterGroup.selectedFilters.indexOf(+selectionId);
            this.selectedFiltersList.find(sf => sf.groupName === filterGroupName).selectedFilters
                .splice(index, 1);

            // the last filter in the group would remove the group
            if (matchingFilterGroup.selectedFilters.length === 0) {
                const selectedGroupIndex = this.selectedFiltersList.indexOf(matchingFilterGroup);
                this.selectedFiltersList.splice(selectedGroupIndex, 1);
            }
        }
        const parameters = {} as ParamMap;
        this.selectedFiltersList.forEach(fl => parameters[fl.groupName] = [...fl.selectedFilters]);

        const navExtras: NavigationExtras = {
            queryParams: parameters
        };
        this.router.navigate(['/products'], navExtras);
    }
}
