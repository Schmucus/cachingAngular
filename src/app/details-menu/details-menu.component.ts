import { Component, OnInit, Input } from '@angular/core';
import { Cache } from '../cache';
import { CachesService } from './caches.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import { Log } from '../log';


@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {

  @Input() cache: Cache;
  @Input() logs: Log[];

  menuItems: MenuItem[];
  rows = [1,2,3,4];
  activeItem: MenuItem;

  constructor() { }



  ngOnInit() {
    this.menuItems = [
       {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Calendar', icon: 'fa fa-fw fa-calendar'}
    ];
    this.activeItem = this.menuItems[0];
  }

}