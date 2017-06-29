import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../shared/_service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) { 
    
  }

  ngOnInit() {
  }
  
  onNavigateSubMenuPage(val){
      sessionStorage.setItem("cpTab", val);
      // this.menuService.cpTab = val;
      this.router.navigate(['/sub-menu']);
  }
  
}
