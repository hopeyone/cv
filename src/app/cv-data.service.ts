import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CvDataService {


  constructor(private http: HttpClient) { }

  getCvData() {
    return this.http.get('https://2trt9pwtx7.execute-api.ap-southeast-2.amazonaws.com/items');
  }
}
