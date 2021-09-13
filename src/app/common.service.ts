import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  personalDetails: any;
  professionalDetails: any;
  constructor(private dataService :  DataService) {}

  postForm() : Observable<boolean> {
    return this.dataService.postForm({...this.personalDetails, ...this.professionalDetails});
  }
}
