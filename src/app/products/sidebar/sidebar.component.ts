import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationExtras, ParamMap, ActivatedRoute, Params } from '@angular/router';
import { IFilterGroup } from '../models/filter-group';
import { ISelectedFilters } from '../models/selected-filters';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

    @Input() filterList: IFilterGroup[];
    selectedFiltersList: ISelectedFilters[];
    count = 1;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.selectedFiltersList = new Array<ISelectedFilters>();
        this.setUpFilters();
        this.setFilterSelected();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setFilterSelected();
    }

    /** Populates selected filters if results
    * the page is accessed directly via URL
    */
    private setUpFilters() {
        const queryParams = this.route.snapshot.queryParamMap;
        this.filterList.forEach(fl => {
            if (queryParams.has(fl.group)) {
                this.selectedFiltersList.push({
                    groupName: fl.group,
                    selectedFilters: queryParams.getAll(fl.group).map(fld => +fld)
                });
            }
        });
    }

    // Set selected filter flag
    private setFilterSelected() {
        if (this.selectedFiltersList) {
            this.selectedFiltersList.forEach(sfl => {
                if (this.filterList.some(fl => fl.group === sfl.groupName)) {
                    const selectedFilterGroup = this.filterList.find(fl => fl.group === sfl.groupName);
                    selectedFilterGroup.items.forEach(sfg => {
                        if (sfl.selectedFilters.find(gfl => gfl === +sfg.id)) {
                            sfg.isSelected = true;
                        }
                    }
                    );
                }
            });
        }
    }

    trackById(index, item) {
        return item.name + item.id;
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

        // set query params for selected filters
        this.selectedFiltersList.forEach(fl => {
            parameters[fl.groupName] = [...fl.selectedFilters];
        });

        // update query params with non-filter query parameters
        parameters['ps'] = this.route.snapshot.queryParamMap.get('ps');
        parameters['srt'] = this.route.snapshot.queryParamMap.get('srt');

        const navExtras: NavigationExtras = {
            queryParams: parameters
        };
        this.router.navigate(['/products'], navExtras);
    }
}
