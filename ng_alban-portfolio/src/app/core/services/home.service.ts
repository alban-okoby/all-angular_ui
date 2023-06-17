import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiServeUrl = environment.apiBaseUrl + "/home";

  constructor(private http: HttpClient) { }

  public getHome(): Observable<any[]> {
    return this.http.get<Home[]>(this.apiServeUrl);
  }

  public updateHome(home : Home) {
    const result = this.http.put<Home>(this.apiServeUrl + "/" + home.id, home, {headers : environment.headers});
    return result;
  }
}
