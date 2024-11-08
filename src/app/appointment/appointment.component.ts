import { Component } from '@angular/core';
import { StatesService } from '../services/states.service';
import { Initiate } from 'src/shared/initiate';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent extends Initiate {
  states: any[] = [];

  constructor(public statesService: StatesService) {
    super();
  }
  override classWrapper(): void {
    this.states = this.statesService.dailyTable;
    console.log(this.states);
  }
}
