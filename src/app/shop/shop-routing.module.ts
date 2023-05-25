import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './adminComponents/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shop/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard]
      }

    ],
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
