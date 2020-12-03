import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', redirectTo:'products',pathMatch:'full' }, //空白で実行すると、自動的に/productsが挿入される
  
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule
  ],


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
