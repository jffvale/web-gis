import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cache } from '../entity/cache';

@Injectable({
  providedIn: 'root'
})
export class PythonFlaskAPIService {
    private baseUrl = '192.168.15.11:8080';

    constructor(private httpClient: HttpClient) { }

    getCacheList() {
        return this.httpClient.get<Cache>(this.baseUrl + '/cache/list');
    }
}
