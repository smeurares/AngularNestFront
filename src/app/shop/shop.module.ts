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

@NgModule({
  declarations: [NavbarComponent, MainComponent, CarouselHeaderComponent, ProductsContainerComponent, ProductComponent, HomeComponent, ProfileComponent, AdminComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CoreModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzLayoutModule,
    NzSpaceModule,
    NzCarouselModule,
    NzGridModule,
    NzCardModule
  ],
})
export class ShopModule {}
