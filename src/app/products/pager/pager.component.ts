import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { IPagingView } from '../models/paging-view';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnChanges {

  @Input() paging: IPagingView;
  pager: any = {};
  currentPage: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setPager();
  }

  private setPager() {
    const pageQuery = this.route.snapshot.queryParams['page'];
    if (!pageQuery) {
       this.currentPage = 1;
    } else {
      this.currentPage = +pageQuery ;
    }
  }

  setPage(page: number = 1) {

    const navExtras: NavigationExtras = {
      queryParams: { page: page },
      queryParamsHandling: 'merge'
    };
    this.router.navigate(['/products'], navExtras);
  }
}
