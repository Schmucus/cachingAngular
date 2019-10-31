import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CachesService } from './caches.service';
import { HttpClientModule } from '@angular/common/http';
import { CacheShortDetailsComponent } from './cache-short-details/cache-short-details.component';
import {GMapModule} from 'primeng/gmap';
import { TestComponent } from './cache-short-details/test/test.component';
import { MapsComponent } from './maps/maps.component';
import { FullDetailsComponent } from './full-details/full-details.component';
import {TabViewModule} from 'primeng/tabview';
import { DetailsMenuComponent } from './details-menu/details-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router, RouterModule, Routes} from '@angular/router';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { LogsComponent } from './logs/logs.component';
import { LogDetailsComponent } from './log-details/log-details.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, GMapModule, TabViewModule, TabMenuModule, TableModule, MenuModule, BrowserAnimationsModule, RouterModule  ],
  declarations: [ AppComponent, HelloComponent, CacheShortDetailsComponent, TestComponent, MapsComponent, FullDetailsComponent, DetailsMenuComponent, LogsComponent, LogDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CachesService, { provide: Router, useValue: {} }]
})
export class AppModule { }
