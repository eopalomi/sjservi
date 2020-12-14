import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TablePageComponent } from './components/table-page/table-page.component';
import { CarteraClienteComponent } from './pages/cartera-cliente/cartera-cliente.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TablePageComponent,
    CarteraClienteComponent,
    GestionUsuariosComponent,
    PaginaInicioComponent,
    FormPageComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
