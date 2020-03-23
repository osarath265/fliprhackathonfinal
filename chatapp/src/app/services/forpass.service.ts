import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForpassService {
  obj:any;
  updatedobj;
  public localemail:any;
  url='http://localhost:3000/auth/forgotpasswordlink';
  set_passwordurl='http://localhost:3000/auth/resetpassword';
  constructor(private http:HttpClient) { }
  receivemail(obj)
  {
    console.log("at service",obj);
    return this.http.post(this.url,obj);
  }
  newpassword(updatedobj)
  {
    return this.http.post(this.set_passwordurl,updatedobj);
  }
}
