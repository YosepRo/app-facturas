import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-r-productos',
  templateUrl: './r-productos.page.html',
  styleUrls: ['./r-productos.page.scss'],
})
export class RProductosPage implements OnInit {

  constructor(private router:Router, private formulario: FormBuilder, private storage:Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  formProducto = this.formulario.group({
    nombre: this.formulario.control(""),
    descripcion: this.formulario.control(""),
    urlFoto: this.formulario.control("")
  })

  async guardar(){
    
    this.router.navigate(["/productos"])
  }

  

  agregarProducto() {
    if(this.formProducto.invalid) return 
    console.log(this.formProducto.value);

    const {descripcion,nombre,urlFoto} = this.formProducto.value
   
    this.storage.set("nombre_producto",this.formProducto.value)


    
    this.router.navigate(["/productos"])
   
  }

}
