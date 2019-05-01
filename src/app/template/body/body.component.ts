import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/auth/authservice.service';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  profilesData : User[]
  constructor(public afDatabase:AuthserviceService) { 
   // this.profilesData = this.afDatabase.collection(`profile`).snapshotChanges();
 // console.log(this.profilesData);

 
  }

  ngOnInit() {
    this.afDatabase.getUsers().subscribe(data => {
      this.profilesData = data.map(e => {
        return {
          id: e.payload.doc.id,
           ...e.payload.doc.data()
           } as User;
      })
    });
  }

}
