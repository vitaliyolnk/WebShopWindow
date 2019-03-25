import { Component, OnInit, Input } from '@angular/core';
import { IProductView } from '../models/product-view';
import { IPagingView } from '../models/paging-view';
import { ImageView } from '../shared/image-view.enum';
import { PreviousRouteService } from '../shared/previous-route.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../shared/app-settings';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public ImageView = ImageView;
  public pageSize: number;
  public priceSortOrder: {};
  public pageSizeOptions = [12, 24, 48];
  public priceSortOptions = [{ name: 'ASC', value: 'asc' }, { name: 'DESC', value: 'desc' }];

  constructor(
    // DO NOT REMOVE. used for previouse route URL on details page.
    private previouseRoutService: PreviousRouteService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  @Input() products: IProductView[];
  @Input() paging: IPagingView;

  ngOnInit() {
    const selectedPageSize = +this.route.snapshot.queryParamMap.get('ps');
    this.pageSize = selectedPageSize ? selectedPageSize : this.pageSizeOptions[0];
    const selectedSortOrder = this.route.snapshot.queryParamMap.get('srt');
    this.priceSortOrder = selectedSortOrder ? selectedSortOrder : this.priceSortOptions[0].value;
    this.titleService.setTitle(`${AppSettings.WEBSITE_NAME} | Shop`);
  }

  setPageSize(value: number): void {
    this.pageSize = +value;
    const navExtras: NavigationExtras = {
      queryParams: { 'ps': value },
      queryParamsHandling: 'merge'
    };

    this.router.navigate(['/products'], navExtras);
  }

  selectSortOrder(priceSortOrder: string): void {
    this.priceSortOrder = priceSortOrder;
    const navExtras: NavigationExtras = {
      queryParams: { 'srt': priceSortOrder },
      queryParamsHandling: 'merge'
    };

    this.router.navigate(['/products'], navExtras);
  }
}
