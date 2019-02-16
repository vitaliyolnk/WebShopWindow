import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './products/sidebar/sidebar.component';
import { QuickViewComponent } from './products/quick-view/quick-view.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDetailsResolver } from './products/shared/product-details-resolver.service';
import { ProductService } from './products/shared/product.service';
import { PagerComponent } from './products/pager/pager.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:id', component: ProductDetailsComponent,
    resolve: { productDetails: ProductDetailsResolver }
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    SidebarComponent,
    QuickViewComponent,
    ProductDetailsComponent,
    PagerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService,
    ProductDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
