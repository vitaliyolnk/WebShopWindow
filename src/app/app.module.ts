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
import { CategoriesService } from './products/shared/categories.service';
import { ProductTitlePipe } from './products/shared/product-title.pipe';
import { ProductFeaturesPipe } from './products/shared/product-features.pipe';
import { ProductImageUrlPipe } from './products/shared/product-image-url.pipe';
import { ProductRelatedPipe } from './products/shared/product-related.pipe';

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
    PagerComponent,
    ProductTitlePipe,
    ProductFeaturesPipe,
    ProductImageUrlPipe,
    ProductRelatedPipe
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
    CategoriesService,
    ProductService,
    ProductDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
