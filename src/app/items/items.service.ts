import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemsService {
  apiUrl: string ='http://todoapi.local/api/traceitem/'; 
  //apiUrl: string ='http://localhost:5000/api/traceitem/'; 
  //apiUrl: string ='https://api.github.com/users/hadley/orgs';
  private headers: Headers = new Headers();
  constructor(private _http: Http) {     
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');    
  }

  getItem(itemcode:string) {
        console.log(this.apiUrl+itemcode);
        console.log(this.headers);
        // return this._http.get(this.apiUrl + itemcode)
        //     .map((res: Response) => {
        //         return res.json();
        //     })
        //     .catch(this.handleError);
        return this._http.get(this.apiUrl+itemcode).map((data: Response) => data.json());        
  }

  private handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
        console.log(serverError);
        for (var key in serverError) {
            if (serverError[key])
                modelStateErrors += serverError[key] + '\n';
        }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }

}