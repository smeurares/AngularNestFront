import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreRoutingModule } from './core-routing.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
