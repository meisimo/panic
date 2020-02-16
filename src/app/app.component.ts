import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pan!c',
      url: '/home',
      icon: 'alert'
    },
    {
      title: 'Usuario',
      url: '/users',
      icon: 'contact'
    },
    {
      title: 'Ajustes',
      url: '/list',
      icon: 'settings'
    },
    {
      title: 'mapa',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'Key'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
