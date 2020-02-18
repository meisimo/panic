import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ocultar1: boolean    = false;

  constructor(private storage: Storage) { }

  accion1() {
     this.ocultar1 = true;
   }

   accion2() {
    this.ocultar1 = false;
  }

  ngOnInit() {
  }

  log(){
    this.storage.set('logged', 1 )
  }

}
