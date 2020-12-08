import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;


  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) {
    this.usuario = new UsuarioModel();

    this.usuario.nombre = 'user-i01';
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    if (form.invalid) { 
      this.openSnackBar('Ingrese el usuario y contraseña', 'ERROR'); 
      return; 
    };

    this.auth.login(this.usuario)
      .subscribe(
        resp => {
          console.log(resp);
          this.router.navigateByUrl('/home');
        }, (err) => {

          this.openSnackBar('Usuario y/o Contraseña invalida', 'ERROR');
          console.log("error de login");
          console.log(err);
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
