import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayallService {

  constructor(private http: HttpClient){}
  getdisplayall(): Observable<any> {
    return this.http.get("http://localhost:4500/nutrition");
  }
  getDetails(id: any):Observable<any>{
    return this.http.get("http://localhost:4500/nutrition/" +id);
  }
}