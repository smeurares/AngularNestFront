import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import {  UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private readonly apiService: ApiService) {}

  apiUrl: string = "http://localhost:3000"

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  login(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(`${this.apiUrl}/auth/login`, userCredentials)
  }

  register(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(`${this.apiUrl}/users/register`, userCredentials);
  }
}
