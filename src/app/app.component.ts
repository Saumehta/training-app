import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './apiService/api.service';
import { PolicyExt } from './models/models';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  isAuthenticated: boolean=true;
  policyExt: PolicyExt = {} as PolicyExt;
  policyId: number = 0;

  constructor(
    private apiService: ApiService
    ) { }


  onPolicyDetailsMapped(policyExt: PolicyExt) {
    this.policyExt = policyExt;
    this.policyId = 0;
  }

  public save(){

    this.apiService.createPolicyDetails(this.policyExt)
    .pipe(
      map(response => {
            if (response.type === HttpEventType.Response) {
              this.policyId = response.body;
            }
          },
          err => this.handleError(err)
      ))
    .subscribe();
  }

  private handleError(err: any) {
    var error = err as HttpErrorResponse;
    console.log("Error:", error);
  };

  logout(){
  }
}
