import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemsService {
  apiUrl: string ='http://todoapi.local/api/traceitem/'; 
  //apiUrl: string ='http://localhost:5000/api/traceitem/'; 
  //apiUrl: string ='https://api.github.com/users/hadley/orgs';
  private datapost: string ='__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTE0MjYwNjQ1NDEPZBYCZg9kFgICAw9kFgICCQ8PFgIeBFRleHQFUFhpbiBt4budaSA8Zm9udCBjb2xvcj0ncmVkJz48Yj48YSBocmVmPSdMb2dpbi5hc3B4Jz7EkMSDbmcgbmjhuq1wPC9hPjwvYj48L2ZvbnQ%2BZGRkfxJGdlMmrpfc09oKgLKf3SlNDZhVwKc0NEsfkHgZJfo%3D&__VIEWSTATEGENERATOR=C2EE9ABB&__EVENTVALIDATION=%2FwEdAATzWzqSNGD6dj1bps9XAiWL5Zken35TfMCr1CBdFx6iImtQgWy8LYWWoXaMcnwFH0uoIatKanHO%2BuhiF%2FQUpC21FO9fOCURyHFQUwY8o6NsoL2qeNVSFJpsNRupgVzPgeA%3D&ctl00%24MainContent%24txtUser=bccp.bdkh&ctl00%24MainContent%24txtPassword=bckh123&ctl00%24MainContent%24btnLogin=%C4%90%C4%83ng+nh%E1%BA%ADp';
  private traceUrl: string ='http://bccp.vnpost.vn/Login.aspx';

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

  loginBCCP(){
    return this._http.post(this.traceUrl,this.datapost,'Content-Type: application/x-www-form-urlencoded')
      .map((data:Response)=>data.toString());
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