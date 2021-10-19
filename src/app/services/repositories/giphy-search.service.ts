import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataResponse } from 'src/app/models/i-data-response';
import { WebApiService } from '../web-api.service';

@Injectable({
  providedIn: 'root'
})
export class GiphySearchService {

  constructor(private _webApi: WebApiService) { }

  search(searchString: string): Observable<IDataResponse> {
    return this._webApi.getSearchResults(searchString);
  }
}
