
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../products';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }


    getProducts():  Observable<any> {
        return this.http.get( '/api/v1/products' )
    }
    getProductById(ProductId:string):  Observable<any> {
        return this.http.get( '/api/v1/products/' +ProductId)
       // return products[ProductId]
    getProducts():Observable<any> {
        // return products 
　　 return this.http.get('/api/v1/products')
    }
    getProductById(ProductId:number) {
        return products[ProductId]
        // return products[ProductId]
    }
}