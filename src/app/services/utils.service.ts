import { Injectable } from "@angular/core";
import { MatDialogConfigService } from "./matdialogconfig.service";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor(
        private matDialogConfigService: MatDialogConfigService
    ) { }

    matSetAppointmentDialog = (value: any): Promise<any> => {       
        return this.matDialogConfigService.matSetAppointmentDialog(value);
    }
}