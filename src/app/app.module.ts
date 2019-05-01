import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
import { HeaderComponent } from './template/header/header.component';
import { SideBarComponent } from './template/side-bar/side-bar.component';
import { BodyComponent } from './template/body/body.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { from } from 'rxjs';
import { ParkingListComponent } from './admin/parking-list/parking-list.component';
import { ParkingAjouterComponent } from './admin/parking-ajouter/parking-ajouter.component';
import { FormsModule } from '@angular/forms';



  var config = {
    apiKey: "AIzaSyDIMUdpZ6KZLvUpSzI6RjLLykMwuCYD_rQ",
    authDomain: "travlercar.firebaseapp.com",
    databaseURL: "https://travlercar.firebaseio.com",
    projectId: "travlercar",
    storageBucket: "travlercar.appspot.com",
    messagingSenderId: "759450804519"
  };
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    HeaderComponent,
    SideBarComponent,
    BodyComponent,
    ParkingListComponent,
    ParkingAjouterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
