import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Adult} from "../models/Adult";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAdults(): Observable<Adult[]> {
    return this.http.get<Adult[]>(this.url + '/api/admin/adults');
  }
}
