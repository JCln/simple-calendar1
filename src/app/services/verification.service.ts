import { Injectable } from "@angular/core";
import { IState } from "../interfaces/interface";
import { ENums } from "../interfaces/enums";

export class MathS {
    static isNull(value: any): boolean {
        return value === undefined || value === null || typeof value === 'undefined' || !value || value.length === 0;
    }
}
@Injectable({
    providedIn: 'root'
})
export class VerificationService {
    newTime = (body: IState): boolean => {
        if (MathS.isNull(body.fromTime)) {
            alert(ENums.fromTime);
            return false;
        }
        if (MathS.isNull(body.toTime)) {
            alert(ENums.toTime);
            return false;
        }
        if (MathS.isNull(body.lable)) {
            alert(ENums.lable);
            return false;
        }
        return true;
    }
}