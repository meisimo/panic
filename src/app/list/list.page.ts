import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private icons = [
    {
      title: 'Emergencia',
      icon: 'call',
      estado: false,
    },
    {
      title: 'Sonido',
      icon: 'volume-high',
      estado: true,
    },
    {
      title: 'Alerta',
      icon: 'notifications',
      estado: true,
    },
    {      
      title: 'Modo oscuro ',
      icon: 'contrast',
      estado: false,
    }
  ]
  public items: Array<{ title: string; note: string; icon: string }> = []
  constructor() {
  }

  ngOnInit() {
  }

  optionChange(){
    console.log(this.icons.map(icon => icon.estado))
  }
}
