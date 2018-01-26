import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class DataService {
    private apiUrl = "https://restcountries.eu/rest/v2/all";

    githubUsers: Array<any>
    countries: Array<any>
    dataAPI: any
    constructor(public _http: HttpClient) {
      this.countries = new Array<any>();
      this.getCountries();
    }
    
    getCountries() {
      this._http.get(this.apiUrl).subscribe(data => {
        this.dataAPI = data;
        this.names();
      });
    }

    private names(): void {
      this.dataAPI.forEach(m => {
        this.countries.push(m.name)
      })
    }
}