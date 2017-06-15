import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { MenuComponent } from "./pages/menu/menu.component";

const APP_ROUTES: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: '', component: LoginComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);