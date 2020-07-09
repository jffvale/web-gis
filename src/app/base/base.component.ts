import { Component, OnInit } from '@angular/core';

import { ApiRestfulService } from '../services/api-restful-service';
import { Response } from '../entity/responses/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  response: Response;
  features: any;

  constructor(private service: ApiRestfulService, private router: Router) { }

  async ngOnInit() {
    await this.service.getCatalogList().toPromise().then(
      (data: Response) => {
        this.features = data.features;
      }
    );
  }

  logout(): void {
      this.router.navigate([""]);
  
  }
}
