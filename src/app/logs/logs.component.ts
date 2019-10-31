import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  newLogs: Log[];
  logsAvailable: boolean;

  @Input()
  set logs(logs: Log[]) {
    this.newLogs = logs;
    if (this.newLogs) {
    console.log('Logs übergeben');
    console.log('Logs Größe: ' + logs.length);
  } else {
    console.log('kein Array übergeben');
  }
  };
  



  

  

  constructor() {
    this.logsAvailable = true;
   }

  ngOnInit() {
    console.log('logs.component ngOnInit');
   // console.log('Anzahl Logs: ' + this.logs.length);
    
  }

  onClick() {
    console.log(this.logs);
  }

}