import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class DataService {
  formUrl : string =  'http://localhost:3000/form';

  constructor(private http : HttpClient) {}

  postForm(formData : any) : Observable<any> {
    return this.http.post<any>(this.formUrl, formData )
  }
}
