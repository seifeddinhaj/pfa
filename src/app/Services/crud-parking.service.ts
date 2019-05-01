import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Parking } from '../models/parking.model';

@Injectable({
  providedIn: 'root'
})
export class CrudParkingService {

  constructor(private firestore: AngularFirestore) { }

  getParkings() {
    return this.firestore.collection('parking').snapshotChanges();
}
createParking(nump:string,numr:string){
  return this.firestore.collection('parking').add({NumParking:nump,Rayon:numr});
}
updateParking(parking:Parking){
  delete parking.id;
  this.firestore.doc('parking/' + parking.id).update(parking);
}
deleteParking(parkingId: string){
  this.firestore.doc('parking/' + parkingId).delete();
}

}
