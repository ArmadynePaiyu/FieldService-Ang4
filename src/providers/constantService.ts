import { User, Task } from '../providers/model/model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

    currentUser: User;
    lastUpdated: Date;
    currentTask: Task;
    taskList: Task[];

    tempStartDate: Date = new Date();
    tempEndDate: Date = new Date();

    startDate: string;;
    endDate: string;

    constructor() {

        this.tempStartDate.setDate(this.tempStartDate.getDate() - 15);
        this.tempEndDate.setMonth(this.tempEndDate.getMonth() + 3);

        this.startDate = this.tempStartDate.toISOString()
        this.endDate = this.tempEndDate.toISOString();

    };
}