import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const requestedUrl = state.url;
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn && requestedUrl.startsWith('auth')) {
      this.router.navigate(['/shop']);
      return false;
    }

    if (!isLoggedIn && !requestedUrl.startsWith('/auth')) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
