import { Injectable } from '@angular/core';
import { API_URL } from './settings';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';


const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  clean():void{
    localStorage.clear();
  }

  public saveUser(user:any): void{
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser():any {
    const user = localStorage.getItem(USER_KEY);
    if (user){
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  //Llamadas de auth

  public register(user:any): Observable<any>{
    return this.http.post(API_URL+'users/patients/',user,httpOptions)
  }

  login(user:any): Observable<any> {
    return this.http.post(API_URL+'users/login/',user,httpOptions);
  }
  logout(): Observable<any> {
    return this.http.post(API_URL+ 'signout', { }, httpOptions);
  }
}