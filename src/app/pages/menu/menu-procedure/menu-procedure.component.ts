import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-procedure',
  templateUrl: './menu-procedure.component.html',
  styleUrls: ['./menu-procedure.component.scss']
})
export class MenuProcedureComponent implements OnInit {
  menuData: Menu[] = [
    new Menu("menu1", "This is menu1 description.", "../../../assets/images/logo/indra-logo-black.jpg")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
