import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9061/api/user/login';
  private registerApiUrl = 'http://localhost:9061/api/user/register';
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  loginUser(user: any) {
    return this.http.post<any>(this.apiUrl, user, {
      responseType: 'text' as 'json',
    });
  }
  registerUser(user: any) {
    return this.http.post<any>(this.registerApiUrl, user, {
      responseType: 'text' as 'json',
    });
  }
  setLoggedInStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }
  logout() {
    this.isLoggedInSubject.next(false);
  }
}
