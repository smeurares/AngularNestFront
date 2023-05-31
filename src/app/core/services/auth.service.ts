import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly user$: BehaviorSubject<UserInterface> =
    new BehaviorSubject<UserInterface>({} as UserInterface);
  constructor(
    private router: Router,
    private readonly apiService: ApiService
  ) {}

  apiUrl: string = 'http://localhost:3000';

  getLocalStorageItem(item: string): string | null {
    const storageString = localStorage.getItem('user');
    if (storageString === null) {
      return null;
    }
    const storageObject = JSON.parse(storageString);
    return storageObject[item];
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  login(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(`${this.apiUrl}/auth/login`, userCredentials);
  }

  register(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(
      `${this.apiUrl}/users/register`,
      userCredentials
    );
  }
}
