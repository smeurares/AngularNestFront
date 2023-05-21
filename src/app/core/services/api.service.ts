import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private createHeaders(token: string): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }

  getAll<T>(apiUrl: string, token?: string): Observable<T[]> {
    const headers = token ? this.createHeaders(token) : undefined;
    return this.http.get<T[]>(apiUrl, { headers });
  }

  getById<T>(apiUrl: string, id: number, token?: string): Observable<T> {
    const url = `${apiUrl}/${id}`;
    const headers = token ? this.createHeaders(token) : undefined;
    return this.http.get<T>(url, { headers });
  }

  post<T>(apiUrl: string, item: T, token?: string): Observable<T> {
    const headers = token ? this.createHeaders(token) : undefined;
    return this.http.post<T>(apiUrl, item, { headers });
  }

  update<T>(apiUrl: string, id: number, item: T, token?: string): Observable<T> {
    const url = `${apiUrl}/${id}`;
    const headers = token ? this.createHeaders(token) : undefined;
    return this.http.put<T>(url, item, { headers });
  }

  delete<T>(apiUrl: string, id: number, token?: string): Observable<void> {
    const url = `${apiUrl}/${id}`;
    const headers = token ? this.createHeaders(token) : undefined;
    return this.http.delete<void>(url, { headers });
  }
}
