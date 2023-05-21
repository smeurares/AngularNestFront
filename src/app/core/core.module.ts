import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreRoutingModule } from './core-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    NzTypographyModule
  ],
  providers: [ApiService]
})
export class CoreModule {}
