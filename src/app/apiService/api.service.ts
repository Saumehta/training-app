import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyExt } from '../models/models';

const httpOptions = {
  observe: 'events',
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  createPolicyDetails(policydetails: PolicyExt): Observable<HttpEvent<number>> {
    let body = JSON.stringify(policydetails);
    return this.http.post<number>('api/policy/create', body, this.makeOptions());
  }


  private makeOptions(): any {
    return httpOptions;
  }

}
