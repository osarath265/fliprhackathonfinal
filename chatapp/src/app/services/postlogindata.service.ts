import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostlogindataService {

  usersignUpData:any;
  logindata:any;
  url = 'http://localhost:3000/auth/signup';
  loginurl = 'http://localhost:3000/auth/login';
  constructor(private http:HttpClient) { }
  postdata(usersignUpData)
  {
    console.log("Data at service",usersignUpData);
    return this.http.post<any>(this.url,usersignUpData);
  }
  verifydata(logindata)
  {
    console.log("Data at service",logindata);
    return this.http.post<any>(this.loginurl,logindata);
  }
}
