import { Routes } from '@angular/router';

import { CarteraClienteComponent } from '../cartera-cliente/cartera-cliente.component';
import { GestionUsuariosComponent } from '../gestion-usuarios/gestion-usuarios.component';
import { MasterPageComponent } from '../master-page/master-page.component';
import { PaginaInicioComponent } from '../pagina-inicio/pagina-inicio.component';

export const HOME_ROUTES: Routes = [
    { path: 'admin', component: MasterPageComponent },
    { path: 'usuarios', component: GestionUsuariosComponent },
    { path: 'cartera', component: CarteraClienteComponent },
    { path: '**', component: PaginaInicioComponent },
];