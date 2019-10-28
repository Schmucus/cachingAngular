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


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, GMapModule, TabViewModule ],
  declarations: [ AppComponent, HelloComponent, CacheShortDetailsComponent, TestComponent, MapsComponent, FullDetailsComponent, DetailsMenuComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CachesService]
})
export class AppModule { }
