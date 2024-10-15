import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"mi-diario-5ac1e","appId":"1:435525399109:web:a99748e515fe163e51a92c","storageBucket":"mi-diario-5ac1e.appspot.com","apiKey":"AIzaSyBzPnB000A0tCwstUHK_2fd42Tmk8NIunY","authDomain":"mi-diario-5ac1e.firebaseapp.com","messagingSenderId":"435525399109"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
