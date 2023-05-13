import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiettypeService {
  constructor(private http:HttpClient) { }

  getDairyProducts():Observable<any> {
    return this.http.get("http://localhost:4500/diets");

  } 
  getDetails(id:any): Observable<any> {
    return this.http.get("http://localhost:4500/diets/" +id);
 }

}