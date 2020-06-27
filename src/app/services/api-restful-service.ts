import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../entity/responses/response';
import { Catalog } from '../entity/models/catalog';
import { Geojson } from '../entity/geojson/geojson';

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
      return this.httpClient.get<Response>('/list', this.httpOptions);
    }

    postSearchRequest(requestBody: Geojson) {
      return this.httpClient.post<Response>('/search', requestBody, this.httpOptions);
    }

    postAddCatalogItem(catalog: Catalog) {
      return this.httpClient.post<Catalog>('/add', catalog, this.httpOptions);
    }

    deleteCatalogItem(id: number) {
      return this.httpClient.delete<Catalog>('/remove?id=' + id.toString(), this.httpOptions);
    }
}
