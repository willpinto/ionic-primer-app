import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'tv-outline',
      name: 'about',
      redirecTo: '/about'
    },
    {
      icon: 'alert-outline',
      name: 'alert',
      redirecTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
