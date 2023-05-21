import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ShopGuard } from './core/guards/shop.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [ShopGuard]
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((m) =>m.ShopModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
