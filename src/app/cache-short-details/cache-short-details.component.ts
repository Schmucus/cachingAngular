import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Cache } from "../cache";

@Component({
  selector: "app-cache-short-details",
  templateUrl: "./cache-short-details.component.html",
  styleUrls: ["./cache-short-details.component.css"]
})
export class CacheShortDetailsComponent implements OnInit {
  @Input() cache: Cache;
  @Output() code: EventEmitter<string> = new EventEmitter<string>();
  name: string;

  constructor() {}

  ngOnInit() {
    console.log(this.cache);
    this.name = this.cache.name;
    console.log("name: " + this.name);
  }

  hClicked() {
    console.log("h clicked");
    this.emitCacheCode();
  }

  emitCacheCode() {
    this.code.emit(this.cache);
  }
}
