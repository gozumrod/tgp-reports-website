import { Component, OnInit } from '@angular/core';

// import { Menu } from '../menu.model';
// import { MenuService } from '../../../shared/_service/menu.service';
// import { Response } from '@angular/http';

// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-menu-procedure',
  templateUrl: './menu-procedure.component.html',
  styleUrls: ['./menu-procedure.component.scss']
})
export class MenuProcedureComponent implements OnInit {
  // public cpCategory: string;
  // public cpSP: string;
  // public stepTitle: string;
  // public stepDescription: string;
  // public menuTab;
  // public menuResult;

  // constructor(private menuService : MenuService){}

  ngOnInit() {
    // // this.cpTab = this.menuService.cpTab;
    // this.menuTab = sessionStorage.getItem("cpTab");
    // // console.log(this.menuService.cpTab);
    // this.menuService.getConfigList()
    //   .map(response => response.json())
    //   .subscribe(response=>{
    //             let result = response;
    //             this.menuResult = result[this.menuTab - 1]
    //             console.log(this.menuResult);
    //   })

  }

}
