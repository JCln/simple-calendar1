import { Component } from '@angular/core';
import { StatesService } from '../services/states.service';
import { Initiate } from 'src/app/shared/initiate';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent extends Initiate {
  states: any[] = [];

  constructor(
    public statesService: StatesService,
    public utilsService: UtilsService
  ) {
    super();
  }
  override classWrapper(): void {
    this.states = this.statesService.dailyTable;
    console.log(this.states);
  }
  drop(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.states, event.previousIndex, event.currentIndex);
  }
  stateClicked = async (item: any) => {
    const res = await this.utilsService.matSetAppointmentDialog(item);
    console.log(res);
    // console.log(res.picker.getDay());
    // console.log(res.picker.getDate());
    // console.log(res.picker.getTime());
  }
}
