import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestfulService } from '../services/api-restful-service';
import { Store } from '@ngrx/store';
import { StorageModel } from '../entity/models/storage-model';
import { User } from '../entity/models/user';
import { Update } from '../services/store/action-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usr: string;
  public pw: string;
  public toStore: StorageModel;

  constructor(private storage: Store<StorageModel>, private service: ApiRestfulService, private router: Router, ) {
    this.toStore = new StorageModel();
  }

  ngOnInit() { }

  async login () {
    let user: User = {
      username: this.usr,
      password: this.pw
    }
    try {
      await this.service.login(user);
      this.toStore.setUser(user);
      this.storage.dispatch(Update(this.toStore));
      this.router.navigate(["map"]);
    } catch(response) {
      alert(response.statusText);
    }
  }
}
