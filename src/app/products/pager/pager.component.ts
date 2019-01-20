import { Component, OnInit } from '@angular/core';
import { ParamMap, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  pager: any = {};

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.pager = {pages: [1, 2, 3, 5, 6], currentPage: 1};
  }

  setPage(page: number = 1) {
    // get pager object from service
    this.pager = {
      totalItems: 25,
      currentPage: page,
      pageSize: 20,
      totalPages: 20,
      startPage: 1,
      endPage: 10,
      startIndex: 1,
      endIndex: 10,
      pages: [1, 2, 3, 5, 6]
  };

  const navExtras: NavigationExtras = {
      queryParams: {page: page},
      queryParamsHandling: 'merge'
  };
  this.router.navigate(['/products'], navExtras);
    // get current page of items
  //  this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
