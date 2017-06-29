import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClient } from './http.service';

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) { }
    

    getConfigList(){
        return this.http.get("../../assets/json-files/menu.config.json");
    }
    
}