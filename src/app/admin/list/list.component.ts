import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  profileData : Observable<any>
  constructor(public afDatabase:AngularFireDatabase) {
    
    

  this.profileData = this.afDatabase.object(`profile`).valueChanges();
  console.log(this.profileData);

   }
  

  ngOnInit() {
  }

}
