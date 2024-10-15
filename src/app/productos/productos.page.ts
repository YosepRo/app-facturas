import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {


  producto :any
  constructor(private router:Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    this.obtenerProducto()

  }


  async agregar(){


    console.log("hola");
    
    this.router.navigate(["/r-productos"])
  }



   async obtenerProducto() {
   

     this.producto  =await this.storage.get("nombre_producto")
    console.log(this.producto);
    
  }

  async vender(){
    this.router.navigate(["/factura"])
  }



 async onClick(){
  this.router.navigate(["/login"])
 }


}






