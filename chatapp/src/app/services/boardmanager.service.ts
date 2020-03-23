import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardmanagerService {

 url="";

  constructor(private http:HttpClient) { }

  postboardname(name)
  {
    return this.http.post(this.url,name);
  }
}
