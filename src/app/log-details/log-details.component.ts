import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

  @Input() log: Log;

  constructor() { }

  ngOnInit() {
  }

}