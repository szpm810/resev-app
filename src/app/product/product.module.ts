import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'; //app-routingからコピー
import { ProductService } from '../shared/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';

import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: 'products', component: ProductComponent,
        children:[
            { path: '', component: ProductListComponent },
            { path: ':productId',component: ProductDetailComponent }　//app-routingからコピー※スペース入れないこと        
        ]
    }
];


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes), //app-routingでforRoot使っているのでforChildに直す
    CommonModule //Angular特有の便利な機能のためにcommonmoduleが必要
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
