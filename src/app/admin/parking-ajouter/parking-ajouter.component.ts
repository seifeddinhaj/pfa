import { Component, OnInit } from '@angular/core';
import { CrudParkingService } from 'src/app/Services/crud-parking.service';
import { Parking } from 'src/app/models/parking.model';

@Component({
  selector: 'app-parking-ajouter',
  templateUrl: './parking-ajouter.component.html',
  styleUrls: ['./parking-ajouter.component.css']
})
export class ParkingAjouterComponent implements OnInit {
parking=new Parking();
  constructor(private Pservice:CrudParkingService) { }

  ngOnInit() {
   
  }

addParking(nump:string,numr:string){
  console.log("tet"+nump);
this.parking.setnumpr(nump,numr)


this.Pservice.createParking(nump,numr);

}
}
