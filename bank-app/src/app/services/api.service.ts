import { Injectable } from '@angular/core';
import { Observable, of, from, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map, timeout } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error instanceof ErrorEvent) {
          console.error(`\n\n::Frontend Error: ${error}\n\n`);
        } else {
          console.error(`\n\n::Backend Error:\n\n`);
        }
        // console.log('ApiService =>', safeGet(error,'message'));
        // return throwError(error.error); // Already extracted by ErrorInterceptor
        return throwError(error);
      }
    
      private extractData(res: Response) {
        const body = res;
        return body || { };
      }

    getUrl(url: string): Observable<any>{
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }
  
    postUrl(url: string, data): Observable<any>{
        const payload = data;
        return this.http.post(url, payload, httpOptions).pipe(
            catchError(this.handleError)
        )
    } 

    updateUrl(url: string, data): Observable<any>{
        const payload = data;
        return this.http.put(url, payload, httpOptions).pipe(
            catchError(this.handleError));
    }

    patchUrl(url: string, data = {}): Observable<any>{
        const payload = data;
        return this.http.patch(url, payload, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    deleteUrl(url: string): Observable<any>{
        return this.http.delete(url).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    
}