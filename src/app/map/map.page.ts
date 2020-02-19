import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { NavController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', null) mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  num: number;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    ) {
    this.loadGoogleMaps();
    this.num = Math.random();
  }

  randomizeAlert(){
    return this.num > 0.5;
  }

  ngOnInit() {
  }

  loadGoogleMaps() {
    if (typeof google == "undefined" || typeof google.maps == "undefined") {

      window['mapInit'] = () => {
        this.initMap();
        console.log("LOADING...");
      }

      let script = document.createElement("script");
      script.id = "googleMaps";

      if (this.apiKey) {
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
      }

      document.body.appendChild(script);


    }
    else {
      console.log("showing map");
      this.initMap();
    }

  }

  async initMap() {
    this.mapInitialised = true;
    try {
      let position = await Geolocation.getCurrentPosition();
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    } catch (err) {
      console.error("Map couldnt be loaded");
      this.errorCargandoMapa()
    }

  }

  async mensageAlerta(mensage){
    const alert = await this.alertController.create({
      header: 'Señal enviada',
      message: `Emergencia ${mensage}!<br>Gracias por no ignorarnos :)`,
      buttons: ['Aceptar']
    })
    await alert.present()
  }

  async errorCargandoMapa(){
    const alert = await this.alertController.create({
      header: 'Algo no ha salido bien',
      message: `El mapa no se logró cargar. Hay problemas con la geolocalización :(`,
      buttons: ['Aceptar']
    })
    await alert.present()
  }
}
