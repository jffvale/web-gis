import { Component, OnInit } from '@angular/core';

import { ApiRestfulService } from '../services/api-restful-service';
import { Response } from '../entity/responses/response';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  response: Response;
  features: any;

  constructor(private service: ApiRestfulService) { }

  async ngOnInit() {
    await this.service.getCatalogList().toPromise().then(
      (data: Response) => {
        this.features = data.features;
      }
    );
  }
}
