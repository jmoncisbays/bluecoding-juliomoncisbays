import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GiphySearchService } from 'src/app/services/repositories/giphy-search.service';
import { IDataResponse } from './models/i-data-response';
import { IGif } from './models/i-gif';

export interface IFormInput {
  search: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText: string = "";
  formSearch = new FormGroup({
    search: new FormControl(''),
  });
  searchResults: IGif[] = [];
  
  constructor(private _gifyService: GiphySearchService) {}

  ngOnInit() {  }

  search() {
    let formInput: IFormInput = <IFormInput>this.formSearch.value;

    this._gifyService.search(formInput.search).subscribe((data: IDataResponse) => {
      this.searchResults = data.data;
    });
  }
}
