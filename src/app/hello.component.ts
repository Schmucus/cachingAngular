import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CachesService } from './caches.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  caches: Cache[];

  constructor(private cachesService: CachesService) {

  }

ngOnInit() {
  this.cachesService.getCaches().subscribe(caches => this.caches = caches);
}

}
