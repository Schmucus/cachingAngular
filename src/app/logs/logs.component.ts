import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  //logs: Log[];
  logsAvailable: boolean;

  @Input()
  set logs(logs: Log[]) {
    this.logs = logs;
    if ( logs.length>0) {
      this.logsAvailable = true;
      console.log('true');
    } else {
      this.logsAvailable = false;
      console.log('false');
    }
  }

  

  

  constructor() { }

  ngOnInit() {
    console.log('logs.component ngOnInit');
   // console.log('Anzahl Logs: ' + this.logs.length);
    
  }

  onClick() {
    console.log(this.logs);
  }

}