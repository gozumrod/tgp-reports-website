import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.model';
import { MenuService } from '../../../shared/_service/menu.service';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  public cpCategory: string;
  public cpSP: string;
  public stepTitle: string;
  public stepDescription: string;
  public menuTab;
  public menuResult;

  public cpTabs = [];


 
  constructor(private menuService : MenuService) { }

    ngOnInit() {
    this.menuTab = sessionStorage.getItem("cpTab");
    // console.log(this.menuService.cpTab);
    this.menuService.getConfigList()
      .map(response => response.json())
      .subscribe(response=>{
                let result = response;

                if(result){
                  this.menuResult = result[this.menuTab - 1]

                  console.log(this.menuResult.cp1kTabs);
                  console.log(this.menuResult.cp1kTabs.length); // undefined
                  
                  var x = 0;
                  for(var y in this.menuResult.cp1kTabs){

                    console.log(this.menuResult.cp1kTabs[y]);
                    this.cpTabs[x] = [];

                    for(var z in this.menuResult.cp1kTabs[y]){
                      console.log(this.menuResult.cp1kTabs[y][z]);
                      this.cpTabs[x].push(this.menuResult.cp1kTabs[y][z]);
                    }
                    console.log(this.cpTabs[x]);

                    x++;
                  }
                  console.log(this.cpTabs);
                }

                //test
                // // console.log(this.menuResult);
                // console.log(this.menuResult);
                // this.cpTabs = this.menuResult.cp1kTabs;
                // console.log(this.cpTabs.cp1kSP1);
                
                // for (let x = 0; x <= this.cpTabs.length; x++){
                //   Object.keys(this.cpTabs.cp1kSP[x - 1]).forEach( key => {
                //   console.log(this.cpTabs.cp1kSP[x - 1][key]); //value    
                //   console.log(key); //key
                //   });
                // }

                  // Object.keys(this.cpTabs).forEach( key => {
                  // console.log(this.cpTabs[key]); //value    
                  // console.log(key); //key
                  // });

                // var cp1ktabs = this.menuResult.cp1kTabs;
                // console.log(cp1ktabs);
                // console.log(cp1ktabs[0]);
                // console.log(cp1ktabs.cp1kSP1);

      })


}
}

