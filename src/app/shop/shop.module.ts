import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MainComponent } from './main/main.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CarouselHeaderComponent } from './components/carousel-header/carousel-header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './adminComponents/admin/admin.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AddProductFormComponent } from './adminComponents/add-product-form/add-product-form.component';
import { AddProductsCSVComponent } from './adminComponents/add-products-csv/add-products-csv.component';
import { AdminAnalitycsComponent } from './adminComponents/admin-analitycs/admin-analitycs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ExcelProductsTableComponent } from './adminComponents/excel-products-table/excel-products-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';

const CHARTS_MODULE = NgxEchartsModule.forRoot({
  echarts: () => import('echarts')
})

@NgModule({
  declarations: [NavbarComponent, MainComponent, CarouselHeaderComponent,CarouselItemComponent, ProductsContainerComponent, ProductComponent, HomeComponent, ProfileComponent, AdminComponent, AddProductFormComponent, AddProductsCSVComponent, AdminAnalitycsComponent, ExcelProductsTableComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CoreModule,
    FormsModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzLayoutModule,
    NzSpaceModule,
    NzCarouselModule,
    NzGridModule,
    NzCardModule,
    NzMessageModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzUploadModule,
    NzTableModule,
    CHARTS_MODULE,
    NzNotificationModule,
    NzBadgeModule,
    NzSpinModule
  ],
})
export class ShopModule {}
