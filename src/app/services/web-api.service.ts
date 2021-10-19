import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IDataResponse } from 'src/app/models/i-data-response';

const url = environment.webapiUrl;

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private httpClient: HttpClient) { }

  getSearchResults(searchText: string): Observable<IDataResponse> {
    return this.httpClient.get<IDataResponse>(`${url}?api_key=gdwjphWDU038gRbOZBeOX0oNWQZEdPGM&q=${searchText}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg: string;

    // no response from WebAPI server
    if (error.status == 0) {
      errorMsg = "The backend application is not running";
    }
    else if (error.error instanceof ErrorEvent) {
      console.error('An error has occurred:', error.error.message);
      errorMsg = error.error.message;
    }
    else {
      errorMsg = error.error;
    }

    return throwError(errorMsg);
  };

}