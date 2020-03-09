import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-gis';

  constructor(private modalService: NgbModal){}

  openBackDropCustomClass(content) {
    this.modalService.open(content, { 
      centered: false,
      backdrop:false,
      
      });
  }


}
