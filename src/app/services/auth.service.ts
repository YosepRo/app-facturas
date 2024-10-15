import { Injectable } from '@angular/core';
import {Auth,GoogleAuthProvider ,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {





  constructor(private auth: Auth) { }

  async logingogle(){

  let provider=new GoogleAuthProvider 
  await signInWithPopup(this.auth,provider)

  }

 async loginconcorreo(correo:string,contrasena:string){


  const usuario= await signInWithEmailAndPassword(this.auth,correo,contrasena)
  return usuario

 }
 async registrocorreocontrasena(correo:string,contrasena:string){


   
  const usuario=await createUserWithEmailAndPassword(this.auth,correo,contrasena)
  console.log(usuario);
  
   return usuario

 }

 async cerrarsesion(){
  await this.auth.signOut()
 }

}
