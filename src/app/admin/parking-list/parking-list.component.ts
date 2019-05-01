import { Component, OnInit } from '@angular/core';
import { CrudParkingService } from 'src/app/Services/crud-parking.service';
import { Parking } from 'src/app/models/parking.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
parkings:Parking[];

  constructor(private Pservice:CrudParkingService) { }

  ngOnInit() {
    this.Pservice.getParkings().subscribe(data => {
      this.parkings = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }  as Parking;
      })
    });
  }
  delete(id: string) {
    this.Pservice.deleteParking(id);
  }


}
