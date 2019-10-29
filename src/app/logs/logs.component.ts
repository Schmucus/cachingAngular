import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  @Input() logs: Log[];

  constructor() { }

  ngOnInit() {
    console.log('logs.component ngOnInit');
  }

  onClick() {
    console.log(this.logs);
  }

}