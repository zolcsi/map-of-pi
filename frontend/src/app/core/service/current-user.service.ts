import { Injectable } from '@angular/core';
import { AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root',
})

export class CurrentUserService {
  private currentUser: any;
  private tokenKey: string = 'currentUserAccessToken';
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem(this.tokenKey, token);
    console.log('token from backedn : ' + token);
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser(user: any): void {
    this.currentUser = user;
    console.log('from current user : ', this.currentUser);
  }

  getConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {};
    if (this.token) {
      config.headers = {
        Authorization: `Bearer ${this.token}`,
      };
    }
    return config;
  }
}
