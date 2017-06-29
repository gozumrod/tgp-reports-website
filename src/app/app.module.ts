import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { routing } from './app.routing';
import { SubMenuComponent } from './pages/menu/sub-menu/sub-menu.component';
import { MenuProcedureComponent } from './pages/menu/menu-procedure/menu-procedure.component';

//services
import { MenuService } from './shared/_service/menu.service';
import { HttpClient } from './shared/_service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    SubMenuComponent,
    MenuProcedureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpClient, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
