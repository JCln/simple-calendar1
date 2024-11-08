import { Component } from '@angular/core';
import { ENRoutes } from 'src/enums/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-calender';
  appointment = ENRoutes.appointment;
}
