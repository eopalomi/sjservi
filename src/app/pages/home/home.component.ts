import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // Rutas del Menu Navegacion
  Rutas: { ruta: string, nombreRuta: string }[] = [
    { ruta: 'usuarios', nombreRuta: 'Usuario' },
    { ruta: 'cartera', nombreRuta: 'Cartera de Clientes' }
  ];

  menu: any[] = [
    {
      displayName: 'Admin',
      iconName: 'admin_panel_settings',
      route: 'admin',
    },
    {
      displayName: 'Ventas',
      iconName: 'request_quote',
      children: [
        {
          displayName: 'Cartera',
          iconName: 'local_mall',
          route: 'cartera'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
        {
          displayName: 'Usuarios',
          iconName: 'person',
          route: 'usuarios'
        }
      ]
    }
  ];

  // Menu Responsive
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private auth: AuthService, 
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
