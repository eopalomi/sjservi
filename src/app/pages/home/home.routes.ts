import { Routes } from '@angular/router';

import { CarteraClienteComponent } from '../cartera-cliente/cartera-cliente.component';
import { GestionUsuariosComponent } from '../gestion-usuarios/gestion-usuarios.component';
import { PaginaInicioComponent } from '../pagina-inicio/pagina-inicio.component';

export const HOME_ROUTES: Routes = [
    { path: 'usuarios', component: GestionUsuariosComponent },
    { path: 'cartera', component: CarteraClienteComponent },
    { path: '**', component: PaginaInicioComponent },
];