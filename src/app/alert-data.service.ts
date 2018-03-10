import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertDataService {
  data1: any;
  constructor(private http: Http) {}

  // Read data from alerts json file
  public getAlertData() {
    return this.http.get('./assets/alerts.json').map((res: Response) => res.json());
  }
}
