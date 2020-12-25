import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ProductService } from 'src/app/shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any 

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products=products

  products: any 

  constructor(private productService:ProductService) { }

  ngOnInit() {
    // this.products=this.productService.getProducts()
       const productsObservale=this.productService.getProducts()
       productsObservale.subscribe(
         (data)=>{
          this.products=data
          },
         (err)=>{ console.error('次のエラーが発生しました: ' + err)},
         ()=>{console.log('完了しました')}
       )





  //   const productsObservale=this.productService.getProducts()
  //   productsObservale.subscribe(
  //     (data)=>{
  //       this.products=data
  //     },
  //     (err)=>{console.error('次のエラーが発生しました:'+err)
  //   }


// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.error('エラー発生');
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

//   console.log('just before subscribe');
// 　observable.subscribe({
//   next(data) { console.log('次のデータが出力されました: ' + data); },
//   error(err) { console.error('次のエラーが発生しました: ' + err); },
//   complete() { console.log('完了しました'); }
// });
// console.log('subscribeから抜けました');

  }

}
