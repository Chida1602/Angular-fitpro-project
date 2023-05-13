import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
    httpOptions:any;
    constructor(private http:HttpClient) { 
      this.httpOptions = {
  
        headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        
        'Authorization': "Bearer "+sessionStorage.getItem("token")
        
        })
        
        }
    }
    
    getForum():Observable<any>{
      return this.http.get("http://localhost:4500/forum",this.httpOptions)
    }
    postForum(obj:any):Observable<any>{
      return this.http.post("http://localhost:4500/forum/",obj,this.httpOptions)
    }
    updateForum(obj:any,id:any):Observable<any>{
      return this.http.patch("http://localhost:4500/forum/"+id,obj,this.httpOptions)
    }
    getUsers():Observable<any>{
      return this.http.get("http://localhost:4500/users",this.httpOptions)
    }
  
  }
