import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cache } from './cache';
import { Log } from '../log';

@Injectable({
  providedIn: 'root'
})
export class CachesService {

  caches;
  cachesDetails: Cache[];
  logs: Log[];
  

  constructor(private http: HttpClient) {
    this.cachesDetails = [];
    const _this = this;
    this.getCaches().subscribe(result => 
  {
    _this.caches = result['results'];
    console.log(_this.caches);
    _this.getCacheDetails();
  });
   }


  getCaches() {
    //this.caches = this.http.get<Cache[]>('https://www.opencaching.de/okapi/services/caches/search/nearest?center=48.7|11.4&consumer_key=6EVPRQhKzSwVrDpT33WF');
    return this.http.get<Cache[]>('https://www.opencaching.de/okapi/services/caches/search/nearest?center=48.7|11.4&consumer_key=6EVPRQhKzSwVrDpT33WF');
  }

  returnCaches() {
    console.log('returnCaches: ' + this.caches);
    return this.caches;
  }

  setCaches(cachesList) {
    this.caches = cachesList;
    console.log(this.caches);
  }

  getCacheDetails() {
    console.log('Liste der Caches');
    console.log(this.caches);
    for (var cacheCode of this.caches) {
      console.log(cacheCode);
      this.http.get<Cache>('https://www.opencaching.de/okapi/services/caches/geocache?cache_code=' + cacheCode + '&consumer_key=6EVPRQhKzSwVrDpT33WF')
      .subscribe(result => {
        this.cachesDetails.push(result);
        console.log('Details von Cache ' + cacheCode + ' gelaen.');
      });      
    }
  }

  getDetailedCaches() {
    return this.cachesDetails;
  }

  getFullCacheDetails(cache: Cache) {
    console.log('getFullCacheDetails');
    return this.http.get<Cache>('https://www.opencaching.de/okapi/services/caches/geocache?cache_code=' + cache.code + '&fields=difficulty|terrain|short_description|size2|last_found&consumer_key=6EVPRQhKzSwVrDpT33WF');
   //console.log('Peter: ' + peter);
  }


  getLogs(cache: Cache) {
    /*console.log('getLogs');
    console.log(this.http.get<any>('https://www.opencaching.de/okapi/services/logs/logs?cache_code=' + cache.code + '&consumer_key=6EVPRQhKzSwVrDpT33WF')
    .subscribe(result => {
      this.logs = result;
      console.log('result');
      console.log(result);
      console.log('result[0]');
      console.log(result[0]);
    }));
    return this.logs;*/
    return this.http.get<Log[]>('https://www.opencaching.de/okapi/services/logs/logs?cache_code=' + cache.code + '&consumer_key=6EVPRQhKzSwVrDpT33WF');
  }



}