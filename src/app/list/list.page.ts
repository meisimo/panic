import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    // 'call',
    // 'volume-high',
    // 'contrast'
    {
      title: 'Emergencia',
      note: '',
      icon: 'call'
    },
    {
      title: 'Sonido',
      note: 'barra',
      icon: 'volume-high'
    },
    {
      
      title: 'Modo oscuro ',
      note: 'barra',
      icon: 'contrast'
    }
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < 3; i++) {
      // if (i==0) {
      //   this.items.push({
      //     title: 'Emergencia',
      //     note: 'This is item #' + i,
      //     icon: this.icons[i]
      //   });
      // }else if(i==1){
      //   this.items.push({
      //     title: 'Sonido ' + i,
      //     note: 'This is item #' + i,
      //     icon: this.icons[i]
      //   });
      // }else{
      //   this.items.push({
      //     title: 'Modo oscuro ' + i,
      //     note: 'This is item #' + i,
      //     icon: this.icons[i]
      //   });
      // }
      
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
