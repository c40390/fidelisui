import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertDataService } from './alert-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  alertData: any;
  alertDataObj: any;
  high = 0;
  medium = 0;
  low = 0;
  smtp = 0;
  http = 0;
  ftp = 0;
  tls = 0;
  searchText: any;

  constructor(private alertdataservice: AlertDataService) {}

  ngOnInit() {
    this.alertdataservice.getAlertData().subscribe(res => {
      this.alertData = res;
      this.countStats();
    });
  }

  // Get full details of alert selected
  public getfulldetails(dataobj) {
    this.alertDataObj = dataobj;
  }

  // Count the stats by analyzing data in json file
  public countStats() {
    for (let i = 0; i < this.alertData.length; i++) {
      if (this.alertData[i].Severity === 'High') {
        this.high++;
      } else if (this.alertData[i].Severity === 'Medium') {
        this.medium++;
      } else {
        this.low++;
      }
      if (this.alertData[i].Protocol === 'SMTP') {
        this.smtp++;
      } else if (this.alertData[i].Protocol === 'HTTP') {
        this.http++;
      } else if (this.alertData[i].Protocol === 'TLS') {
        this.tls++;
      } else {
        this.ftp++;
      }
    }
  }

  // on click of stats filter the table
  public showClickedStats(clickedVal) {
    console.log(clickedVal.target.innerText);
    this.searchText = clickedVal.target.innerText;
  }
}
