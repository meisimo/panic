import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private logged = 0
  public appPages = [
    {
      title: 'Pan!c',
      url: '/home',
      icon: 'alert',
      loggin_display: -1,
      show: true,
    },
    {
      title: 'Usuario',
      url: '/users',
      icon: 'contact',
      loggin_display: 1,
      show: false,
    },
    {
      title: 'Ajustes',
      url: '/list',
      icon: 'settings',
      loggin_display: -1,
      show: false,
    },
    {
      title: 'mapa',
      url: '/map',
      icon: 'map',
      loggin_display: -1,
      show: false,
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'Key',
      loggin_display: 0,
      show: true,
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    try{
      this.logged = Number(await this.storage.get('logged'))
    } catch (err) {
      this.logged = 0
    }
    this.setShowPages()  
  }

  setShowPages(){
    for(let page of this.appPages){
      page.show = Boolean(page.loggin_display === -1 || ( this.logged === page.loggin_display ))
    }
  }
}
