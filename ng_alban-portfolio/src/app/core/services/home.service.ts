import { Injectable } from '@angular/core';
import { HtppClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HtppClient) { }
}
