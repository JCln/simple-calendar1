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
          isInput: config.isInput,
          inputMinLength: config.inputMinLength,
          placeHolder: config.placeHolder,
          isDelete: config.isDelete,
          icon: config.icon,
          doesNotReturnButton: config.doesNotReturnButton,
          isSelectableDate: config.isSelectableDate,
          changePassword: config.changePassword,
          tooltipText: config.tooltipText,
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