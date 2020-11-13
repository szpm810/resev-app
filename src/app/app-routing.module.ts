import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo:'products',pathMatch:'full' }, //空白で実行すると、自動的に/productsが挿入される
  //{ path: 'detail', component: ProductDetailComponent },product.moduleにコピーしたあとコメントアウト、Product.moduleでコンポーネント(product-list,datail)を読み込ませる
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
