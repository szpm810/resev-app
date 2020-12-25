import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';

];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes),

  exports: [RouterModule]
})
export class AppRoutingModule {
 }
