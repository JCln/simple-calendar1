import { Component } from '@angular/core';
import { StatesService } from '../services/states.service';
import { Initiate } from 'src/app/shared/initiate';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UtilsService } from '../services/utils.service';
import { IState } from '../interfaces/interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent extends Initiate {
  states: IState[] = [];
  appointments: IState[] = [];

  constructor(
    public statesService: StatesService,
    public utilsService: UtilsService
  ) {
    super();
  }
  override classWrapper(): void {
    this.states = this.statesService.dailyTable;
  }
  drop(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.states, event.previousIndex, event.currentIndex);
  }
  tableOfAppointments = (body: IState) => {
    if (body.fromTime && body.toTime)
      this.appointments.push(body);
  }
  stateClicked = async (item: IState) => {
    const res: IState = await this.utilsService.matSetAppointmentDialog(item);
    if (res) {
      this.createAppointment(res.fromTime, res.toTime);
      this.tableOfAppointments(res);
    }
  }
  createAppointment = (fromTime: string, toTime: string) => {
    for (let index = 0; index < this.states.length; index++) {
      if (
        Number.parseFloat(fromTime) <= Number.parseFloat(this.states[index].fromTime) &&
        Number.parseFloat(toTime) + 1 >= Number.parseFloat(this.states[index].toTime)
      )
        this.states[index].lable = 'appointment';
    }
  }
  onDragEnd(item: IState): void {
    this.stateClicked(item);
  }
}
