import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'; //app-routingからコピー
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
            { path: 'login', component:LoginComponent },
            //product.moduleにコピーしたあとコメントアウト、Product.moduleでコンポーネント(product-list,datail)を読み込ませる
            { path: 'register', component:RegisterComponent }
            // { path: '', component: ProductListComponent },
            // { path: ':productId',component: ProductDetailComponent }　
            //app-routingからコピー※スペース入れないこと        
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes), //app-routingでforRoot使っているのでforChildに直す
    CommonModule, //Angular特有の便利な機能のためにcommonmoduleが必要
    FormsModule
  ],
  providers: [
    AuthService 
  ],
  bootstrap: []
})
export class AuthModule { }
