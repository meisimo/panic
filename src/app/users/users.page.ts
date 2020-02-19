import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  logout(){
    this.storage.set('logged', 0 )
  }
}
