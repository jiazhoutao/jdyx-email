import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ConnResult} from './conn-result';
import {Md5} from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class JdyxDashboardService {
  private jdyx = 'apidata/jdyx/account';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };


  getEmail(id: string): Observable<ConnResult> {
    const url = `${this.jdyx}`;
    return this.http.get<ConnResult>(url).pipe(catchError(this.handleError<ConnResult>('requestError', {con: null, suc: false, ver: null} as ConnResult)));
  }

  getMobile(id: string): Observable<ConnResult> {
    const url = `${this.jdyx}/mobile`;
    return this.http.get<ConnResult>(url).pipe(catchError(this.handleError<ConnResult>('requestError', {con: null, suc: false, ver: null} as ConnResult)));
  }

  getCookie(cname): string {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca: string[] = decodedCookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  createNewEmail(passwordValue: string, mobileValue: string): Observable<string>{
    const url = `${this.jdyx}`;
    const md5PassWordValue = Md5.hashStr(passwordValue);
    return this.http.post<string>(url, 'password=' + md5PassWordValue + '&mobile=' + mobileValue, this.httpOptions);
  }


  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      location.href = 'http://id.jmu.edu.cn/amserver/UI/Login?goto=http%3A%2F%2Fjzt.jmu.edu.cn%3A4200';
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  mobileSet(mobileValue: string): Observable<string> {
    const url = `${this.jdyx}/mobile`;
    return this.http.put<string>(url, 'mobile=' + mobileValue, this.httpOptions);
  }

  passWordReset(passwordValue: string): Observable<string> {
    const url = `${this.jdyx}/password`;
    const md5PassWordValue = Md5.hashStr(passwordValue);
    return this.http.put<string>(url, 'password=' + md5PassWordValue, this.httpOptions);
  }

  getUserNameInfo(): Observable<string>{
    const url = `${this.jdyx}/user-info`;
    return this.http.get<string>(url).pipe(catchError(this.handleError<string>('conError', '' as string)));
  }
}
