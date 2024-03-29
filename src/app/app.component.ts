import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CachesService } from './caches.service';
import { GMapModule } from 'primeng/gmap';
import { Cache } from '../cache';
import { Log } from '../log';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent  {
  @Input() name: string;

  payload;
  selectedCache: Cache;
  logs: Log[];

  myCaches;
  options;

  constructor(private cachesService: CachesService) {

  }

ngOnInit() {
  this.logs = [];
  const _this  = this;
  this.myCaches = this.cachesService.getDetailedCaches();
  this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
}


buttonPressed() {  
  //this.myCaches = this.cachesService.returnCaches();
  //console.log(this.myCaches);
  this.cachesService.getCacheDetails();
}

button2Pressed() {
  //console.log(this.cachesService.getCachesDetails());
}

onCodeSent(payload) {
  console.log('code sent: ' + payload);
  this.logs = [];
  this.payload = payload;
  this.selectedCache = payload;
  this.loadDetails();
  //this.logs = this.cachesService.getLogs(this.selectedCache);
  this.loadLogs();
  }


loadDetails() {
    console.log('in FullDetails.loadDetails: ');
    this.cachesService.getFullCacheDetails(this.selectedCache).subscribe(result => {
      console.log(result);
      console.log(result.terrain);
      console.log(result.short_description);
      this.selectedCache.difficulty = result.difficulty;
      this.selectedCache.terrain = result.terrain;
      //this.cache.distance = result.distance;
      this.selectedCache.short_description = result.short_description;
      this.selectedCache.size2 = result.size2;
      this.selectedCache.last_found = result.last_found;
      });
  }

  loadLogs() {
    console.log('appComponent.loadLogs');
    this.cachesService.getLogs(this.selectedCache).subscribe(result => {
      console.log(result);
      //this.logs = result;
      for (var i in result) {
        this.logs.push(result[i]);
      }
    });
  }

}
