import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "../models/UserLogin";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }


  login(user: UserLogin) {
    let formData = new FormData();
    formData.set("username", user.username);
    formData.set("password", user.password);
    return this.http.post<Response>(this.url + '/api/public/login ', formData);
  }

  check():Observable<boolean> {
    return this.http.get<boolean>(this.url + '/api/admin/check')
  }
}
