import { Component, OnInit, Input } from '@angular/core';
import { CachesService } from '../caches.service';
import { Cache } from '../cache';
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css']
})
export class FullDetailsComponent implements OnInit {

  cache: Cache;

  //@Input() cache: Cache;
  @Input()
  set temp(cache: Cache) {
    console.log('Veränderung bemerkt');
    console.log(cache.code);
    this.cache = cache;
    this.loadDetails();
  }


  constructor(private cachesService: CachesService) { }

  ngOnInit() {
    console.log('bin in onInit');
    if (this.cache) {
      console.log('in FullDetails.onInit: ' + this.cachesService.getFullCacheDetails(this.cache));
    }
  }

  loadDetails() {
    console.log('in FullDetails.loadDetails: ');
    this.cachesService.getFullCacheDetails(this.cache).subscribe(result => {
      console.log(result);
      console.log(result.terrain);
      console.log(result.short_description);
      this.cache.difficulty = result.difficulty;
      this.cache.terrain = result.terrain;
      //this.cache.distance = result.distance;
      this.cache.short_description = result.short_description;
      this.cache.size2 = result.size2;
      this.cache.last_found = result.last_found;
      });
  }

}