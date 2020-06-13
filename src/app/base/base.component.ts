import { Component, OnInit } from '@angular/core';

import { ApiRestfulService } from '../services/api-restful-service';
import { Catalog } from '../entity/catalog';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  all_images: Catalog[] = [];

  constructor(private service: ApiRestfulService) { }

  async ngOnInit() {
    await this.service.getCatalogList().toPromise().then(
      (data: Catalog[]) => {
        data.forEach(
          (item: Catalog) => {
            this.all_images.push(item)
          }
        )
      }
    );
  }
}
