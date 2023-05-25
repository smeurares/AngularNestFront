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


  setName(name: string): void {
    localStorage.setItem('name', name)
  }

  getName(): string | null {
    return localStorage.getItem('name');
  }

  setEmail(email: string): void {
    localStorage.setItem('email', email)
  }

  getEmail(): string | null {
    return localStorage.getItem('email');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role)
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  setId(id: string): void {
    localStorage.setItem('id', id)
  }

  getId(): string | null {
    return localStorage.getItem('id')
  }



  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.router.navigate(['/auth/login']);
  }

  login(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(`${this.apiUrl}/auth/login`, userCredentials)
  }

  register(userCredentials: UserInterface): Observable<UserInterface> {
    return this.apiService.post(`${this.apiUrl}/users/register`, userCredentials);
  }
}
