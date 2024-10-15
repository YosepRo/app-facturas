import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit() {
  }

 notas= {

 }


  async cerrarsesion(){
  await this.authservice.cerrarsesion()
  this.router.navigate(["/login"])
 }




}
