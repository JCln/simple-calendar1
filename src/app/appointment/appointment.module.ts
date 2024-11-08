import { NgModule } from '@angular/core';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentComponent } from './appointment.component';


@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    SharedModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
