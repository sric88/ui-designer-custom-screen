import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()

export class ApiService {
    headers: HttpHeaders;
    constructor(private _http: HttpClient) {}

    private _handleSuccess(result: any) {
        return result;
    }

    private _handleError(error: any) {
        return throwError(error);
    }

    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this._http.get(`${environment.api_url}${path}`, { params })
        .pipe(tap(this._handleSuccess, this._handleError));
    }

    public put(path: string, body: Object = {}): Observable<any> {
      return this._http.put(
        `${environment.api_url}${path}`,
        JSON.stringify(body)
      ).pipe(tap(this._handleSuccess, this._handleError));
    }

    public post(path: string, body: Object = {}): Observable<any> {
      return this._http.post(
        `${environment.api_url}${path}`,
        JSON.stringify(body)
      ).pipe(tap(this._handleSuccess, this._handleError));
    }

    public delete(path): Observable<any> {
      return this._http.delete(
        `${environment.api_url}${path}`
      ).pipe(tap(this._handleSuccess, this._handleError));
    }
}
