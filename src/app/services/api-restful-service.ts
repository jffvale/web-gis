import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalog } from '../entity/catalog';
import { SearchRequest } from '../entity/search-request';

@Injectable({
  providedIn: 'root'
})
export class ApiRestfulService {
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      })
    };

    constructor(private httpClient: HttpClient) { }

    getCatalogList() {
      return this.httpClient.get<Catalog[]>('/list', this.httpOptions);
    }

    postSearchRequest(requestBody: SearchRequest) {
      return this.httpClient.post<Catalog[]>('/search', requestBody, this.httpOptions);
    }

    postAddCatalogItem(catalog: Catalog) {
      return this.httpClient.post<Catalog>('/add', catalog, this.httpOptions);
    }

    deleteCatalogItem(id: number) {
      return this.httpClient.delete<Catalog>('/remove?id=' + id.toString(), this.httpOptions);
    }

}
