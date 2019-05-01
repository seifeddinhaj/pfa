import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({

  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,  public afDatabase:AngularFirestore ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['admin/list']);
    } catch (e) {
        alert("Error!"  +  e.message);
    }
    }
    async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['admin/login']);
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}

 getUsers(){
  //this.profileData = this.afDatabase.object(`profile`).valueChanges();
 
 return this.afDatabase.collection(`profile`).snapshotChanges();
 
  
}

}
