import { Injectable } from "@angular/core";
import { IState } from "../interfaces/interface";

@Injectable({
    providedIn: 'root'
})
export class StatesService {
    dailyTable: IState[] = [
        { title: '00:00', lable: '', fromTime: '00:00', toTime: '1:00', date: '', description: 'no desc' },
        { title: '1:00', lable: '', fromTime: '1:00', toTime: '2:00', date: '', description: 'no desc' },
        { title: '2:00', lable: '', fromTime: '2:00', toTime: '3:00', date: '', description: 'no desc' },
        { title: '3:00', lable: '', fromTime: '3:00', toTime: '4:00', date: '', description: 'no desc' },
        { title: '4:00', lable: '', fromTime: '4:00', toTime: '5:00', date: '', description: 'no desc' },
        { title: '5:00', lable: '', fromTime: '5:00', toTime: '6:00', date: '', description: 'no desc' },
        { title: '6:00', lable: '', fromTime: '6:00', toTime: '7:00', date: '', description: 'no desc' },
        { title: '7:00', lable: '', fromTime: '7:00', toTime: '8:00', date: '', description: 'no desc' },
        { title: '8:00', lable: '', fromTime: '8:00', toTime: '9:00', date: '', description: 'no desc' },
        { title: '9:00', lable: '', fromTime: '9:00', toTime: '10:00', date: '', description: 'no desc' },
        { title: '10:00', lable: '', fromTime: '10:00', toTime: '11:00', date: '', description: 'no desc' },
        { title: '11:00', lable: '', fromTime: '11:00', toTime: '12:00', date: '', description: 'no desc' },
        { title: '12:00', lable: '', fromTime: '12:00', toTime: '13:00', date: '', description: 'no desc' },
        { title: '13:00', lable: '', fromTime: '13:00', toTime: '14:00', date: '', description: 'no desc' },
        { title: '14:00', lable: '', fromTime: '14:00', toTime: '15:00', date: '', description: 'no desc' },
        { title: '15:00', lable: '', fromTime: '15:00', toTime: '16:00', date: '', description: 'no desc' },
        { title: '16:00', lable: '', fromTime: '16:00', toTime: '17:00', date: '', description: 'no desc' },
        { title: '17:00', lable: '', fromTime: '17:00', toTime: '18:00', date: '', description: 'no desc' },
        { title: '18:00', lable: '', fromTime: '18:00', toTime: '19:00', date: '', description: 'no desc' },
        { title: '19:00', lable: '', fromTime: '19:00', toTime: '20:00', date: '', description: 'no desc' },
        { title: '20:00', lable: '', fromTime: '20:00', toTime: '21:00', date: '', description: 'no desc' },
        { title: '21:00', lable: '', fromTime: '21:00', toTime: '22:00', date: '', description: 'no desc' },
        { title: '22:00', lable: '', fromTime: '22:00', toTime: '23:00', date: '', description: 'no desc' },
        { title: '23:00', lable: '', fromTime: '23:00', toTime: '24:00', date: '', description: 'no desc' },
    ]
}