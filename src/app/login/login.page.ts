import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulariologin: FormGroup;

  constructor(
    private authservice:AuthService,
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) {
    this.formulariologin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    var f = this.formulariologin.value;
   
      if(this.formulariologin.invalid){
        console.log("rellenar datos ");
        const alert = await this.alertController.create({
          header: 'Datos imcompletos',
          message: 'Tienes que llenar todos los datos ',
          buttons: ['Aceptar'],
        });
  
        await alert.present();
        return 
      }

 const usuruario= await this.authservice.loginconcorreo(f.nombre,f.password)

 console.log(usuruario);
 
  this.router.navigate(["/productos"])



  /* -------------------------------------------------------------------- */


    // const user = localStorage.getItem('usuario');

    // if (!user) return;

    // var usuario = JSON.parse(user);
    // console.log(usuario);

    // if (usuario.nombre == f.nombre && usuario.password == f.password) {
    //   console.log('ingresado');

    //   // redigir
    //   this.router.navigateByUrl('/main');

    //   /* 
      
    //   const valor = {
    //     user: 'joselo',
    //     age: 23,
    //   };
    //   localStorage.setItem('datiro', JSON.stringify(valor));

    //   const getData = localStorage.getItem('datiro');


    //   const datoReal = JSON.parse(getData);
    //   */

      
    // } else {
    //   const alert = await this.alertController.create({
    //     header: 'Datos imcorrectos',
    //     message: 'los datos que ingresastes son incorrectos ',
    //     buttons: ['Aceptar'],
    //   });

    //   await alert.present();
    //   return;
    // }

    /* -------------------------------------------------------------------- */
  }


  async logingogle(){

     await this.authservice.logingogle()
    this.router.navigate(["/productos"])

  }


}
