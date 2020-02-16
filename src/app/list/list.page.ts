import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private icons = {
    sonido: {  
      title: 'Sonido',
      icon: 'volume-high',
    },
    notificacion: {
      title: 'Alerta',
      icon: 'notifications',
    },
    modo_oscuro: {
      title: 'Modo oscuro ',
      icon: 'contrast',
    }
  }
  public items: Array<{ title: string; note: string; icon: string }> = []
  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    try{
      for(let setting of Object.keys(this.icons)){
        this.icons[setting].estado = Number(await this.storage.get(`settings-${setting}`))
      }
    } catch(error){
      console.log("Ha ocurrido un erro a cargar los ajustes")
    }
  }

  optionChange(setting){
    this.storage.set(`settings-${setting}`,this.icons[setting].estado)
  }

}
