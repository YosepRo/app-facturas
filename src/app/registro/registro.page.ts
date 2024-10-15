import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private authservice: AuthService,
    private router:Router
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmacionPassword: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async guardar() {
    var f = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos imcompletos',
        message: 'Tienes que llenar todos los datos ',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    const usuario1 = await this.authservice.registrocorreocontrasena(
      f.nombre,
      f.password
    );
    this.formularioRegistro.reset();
    this.router.navigate(["/login"])

    var usuario = {
      nombre: f.nombre,
      password: f.password,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }



  async volver(){

    this.router.navigate(["/login"])

  }


}
