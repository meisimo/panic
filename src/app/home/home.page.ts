import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private infoIcon = {
    sonido:{
      'on_icon': 'volume-high',
      'off_icon': 'volume-off',
    },
    notificacion:{
      'on_icon': 'notifications',
      'off_icon': 'notifications-off',
    },
    visibilidad:{
      'on_icon': 'eye',
      'off_icon': 'eye-off',
      'estado': true,
    }
  }
  constructor(
    public alertController: AlertController,
    private storage: Storage
  ){}

  async ngOnInit(){
    try {
      await this.initSetValoresInfo()
      this.initSetIconos()
    } catch (error) {
      console.log("No se cargaron los iconos correctamente")
    }
  }

  async muestraMensageMandado(){
    const alert = await this.alertController.create({
      header: 'Señal enviada',
      message: 'Señal de ayuda enviada!',
      buttons: ['Aceptar']
    })
    await alert.present()
  }

  private setOpcionesDefault(){
    const settings = {
      sonido: true,
      alerta: true, 
      modo_oscuro: false,
    }
    for(let setting of Object.keys(settings) ){
      this.storage.set(`settings-${setting}`,Number(settings[setting]))
    }
    this.storage.set(`settings`, 1)
  }

  private async initSetValoresInfo(){
    if (!(await this.storage.get('settings'))){
      this.setOpcionesDefault()    
    }
    let setting
    for(let icon of Object.keys(this.infoIcon)){
      setting = await this.storage.get(`settings-${icon}`)
      if(setting !== null){
        this.infoIcon[icon]['estado'] = Number(setting)
      }
    }
  }

  initSetIconos(){
    for(let icon of Object.keys(this.infoIcon)){
      this.infoIcon[icon]['icon'] = 
      this.infoIcon[icon].estado ? this.infoIcon[icon].on_icon : this.infoIcon[icon].off_icon       
    }
  }
}
