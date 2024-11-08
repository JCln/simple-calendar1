import { inject, Injectable } from "@angular/core";
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatdialogComponent } from "../shared/matdialog/matdialog.component";

@Injectable({
  providedIn: 'root'
})
export class MatDialogConfigService {
  readonly dialog = inject(MatDialog);
  constructor(

  ) { }
  matSetAppointmentDialog = (config: any): Promise<any> => {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(MatdialogComponent, {
        minWidth: config.minWidth,
        disableClose: config.disableClose,
        data: {
          title: config.title,
          picker: config.picker,
          lable: config.lable,
          text: config.text,
          fromTime: config.fromTime,
          toTime: config.toTime,
          description: config.description,
          icon: config.icon,
        }
      });
      dialogRef.afterClosed().subscribe(desc => {
        if (desc) {
          resolve(desc);
        }
        else {
          resolve(false);
        }
      })
    })
  }
}