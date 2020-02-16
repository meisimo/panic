import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private infoIcon = [
    {
      'on_icon': 'volume-high',
      'off_icon': 'volume-off',
      'estado': true,
      'indice': 'sonido',
    },
    {
      'on_icon': 'notifications',
      'off_icon': 'notifications-off',
      'estado': true,
      'indice': 'notificacion',
    },
    {
      'on_icon': 'eye',
      'off_icon': 'eye-off',
      'estado': true,
      'indice': 'visibilidad',
    }
  ]
  constructor(
    public alertController: AlertController
  ){}

  ngOnInit(){
    this.infoIcon.forEach( icon =>
      icon['icon'] = icon.estado ? icon.on_icon : icon.off_icon 
    )
  }

  async muestraMensageMandado(){
    const alert = await this.alertController.create({
      header: 'Señal enviada',
      message: 'Señal de ayuda enviada!',
      buttons: ['Aceptar']
    })
    await alert.present()
  }
}
