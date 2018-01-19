import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskDetails, TaskDetail, GlobalSharedService} from '../../providers/model/model';
import {ApiProvider} from '../../providers/api/api';
import { FieldjobPage } from '../fieldjob/fieldjob';
import { ValueService } from '../../providers/valueService';


/**
 * Generated class for the TasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html',
})
export class TasklistPage {
  tasklists : any;
  users: any;
  selectedTask:TaskDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService : ApiProvider,private valueService:ValueService) {
      
    // this.tasklists =    [    
    //        {  "Task_Status" :"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171013-000024",
    //           "Task_Number":"810",
    //           "Job_Description":"test discription",
    //           "Expense_Method":"Concession",
    //           "Labor_Method":"Goodwill",
    //           "Travel_Method":"Concession",
    //           "Material_Method":"Goodwill",
    //           "Start_Date":"2017-10-13 04:09:00",
    //           "End_Date":"2017-10-14 03:31:00",
    //           "Duration":"300",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "Service_Type":"Repair order",
    //           "City":"DERBY",
    //           "State":"",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":"",
    //           "Contacts" : [{
    //               "Contact_Name" : "Louis Velanica",
    //               "Mobile_Phone" : "+1 832 (456)678",
    //               "Email" : "louis.maurice@gmail.com",
    //               "Contacts_Preferences" : "Mobile"
    //           },{
    //               "Contact_Name" : "Louis Velanica",
    //               "Mobile_Phone" : "+1 832 (456)678",
    //               "Email" : "louis.maurice@gmail.com",
    //               "Contacts_Preferences" : "Mobile"
    //           },{
    //               "Contact_Name" : "Louis Velanica",
    //               "Mobile_Phone" : "+1 832 (456)678",
    //               "Email" : "louis.maurice@gmail.com",
    //               "Contacts_Preferences" : "Mobile"
    //           }]
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"170928-000015",
    //           "Task_Number":"926",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Concession",
    //           "Travel_Method":"Concession",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-21 03:34:00",
    //           "End_Date":"",
    //           "Duration":"120",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"CROYDON ENERGY",
    //           "Service_Type":"Installation",
    //           "City":"CROYDON",
    //           "State":"LBC",
    //           "Zip_Code":"CR0 3RL",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":"1683"
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171016-000052",
    //           "Task_Number":"938",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Billable",
    //           "Travel_Method":"Billable",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-17 06:59:00",
    //           "End_Date":"2017-10-18 03:20:00",
    //           "Duration":"240",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Repair order",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Field Job Completed",
    //           "Technician_ID":"5",
    //           "Service_Request":"171016-000052",
    //           "Task_Number":"939",
    //           "Job_Description":"",
    //           "Expense_Method":"Warranty",
    //           "Labor_Method":"Warranty",
    //           "Travel_Method":"Warranty",
    //           "Material_Method":"Warranty",
    //           "Start_Date":"2017-10-18 07:06:00",
    //           "End_Date":"2017-10-19 03:31:00",
    //           "Duration":"300",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Installation",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Assigned",
    //           "Technician_ID":"5",
    //           "Service_Request":"171016-000052",
    //           "Task_Number":"940",
    //           "Job_Description":"",
    //           "Expense_Method":"Warranty",
    //           "Labor_Method":"Warranty",
    //           "Travel_Method":"Warranty",
    //           "Material_Method":"Warranty",
    //           "Start_Date":"2017-10-19 07:11:00",
    //           "End_Date":"2017-10-20 03:31:00",
    //           "Duration":"360",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Repair order",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171016-000052",
    //           "Task_Number":"942",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-20 07:17:00",
    //           "End_Date":"2017-10-22 03:31:00",
    //           "Duration":"540",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Repair order",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171016-000052",
    //           "Task_Number":"943",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-21 07:23:00",
    //           "End_Date":"2017-10-24 03:31:00",
    //           "Duration":"420",
    //           "Customer_Name":"ROLLS ROYCE POWER ENGINEERING PLC",
    //           "Street_Address":"58 BED FUEL ROOM",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Installation",
    //           "Zip_Code":"DE24 9BD",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000014",
    //           "Task_Number":"966",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Billable",
    //           "Travel_Method":"Billable",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-23 01:27:00",
    //           "End_Date":"2017-10-26 03:31:00",
    //           "Duration":"180",
    //           "Customer_Name":"BURTONS BISCUITS CO",
    //           "Street_Address":"PO BOX 1297",
    //           "City":"BLACKPOOL",
    //           "State":"",
    //           "Service_Type":"Repair order",
    //           "Zip_Code":"FY1 9GY",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":"1738"
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000014",
    //           "Task_Number":"973",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Billable",
    //           "Travel_Method":"Billable",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-26 03:07:00",
    //           "End_Date":"",
    //           "Duration":"480",
    //           "Customer_Name":"BURTONS BISCUITS CO",
    //           "Street_Address":"PO BOX 1297",
    //           "City":"BLACKPOOL",
    //           "State":"",
    //           "Service_Type":"Installation",
    //           "Zip_Code":"FY1 9GY",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":"1814"
    //        },
    //        {
    //           "Task_Status":"Assigned",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000076",
    //           "Task_Number":"974",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-18 07:20:00",
    //           "End_Date":"2017-10-19 07:36:00",
    //           "Duration":"90",
    //           "Customer_Name":"ROLLS ROYCE MARINE OPERATIONS LTD",
    //           "Street_Address":"RAYNESWAY PARK DR",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Installation",
    //           "Zip_Code":"DE21 7XX",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000076",
    //           "Task_Number":"975",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-17 07:21:00",
    //           "End_Date":"2017-10-19 07:36:00",
    //           "Duration":"2880",
    //           "Customer_Name":"ROLLS ROYCE MARINE OPERATIONS LTD",
    //           "Street_Address":"RAYNESWAY PARK DR",
    //           "City":"DERBY",
    //           "State":"",
    //           "Service_Type":"Repair Order",
    //           "Zip_Code":"DE21 7XX",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Accepted",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000076",
    //           "Task_Number":"976",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-16 07:24:00",
    //           "End_Date":"2017-10-18 07:36:00",
    //           "Duration":"330",
    //           "Customer_Name":"ROLLS ROYCE MARINE OPERATIONS LTD",
    //           "Street_Address":"RAYNESWAY PARK DR",
    //           "City":"DERBY",
    //           "State":"",
    //           "Zip_Code":"DE21 7XX",
    //           "Service_Type":"Installation",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Assigned",
    //           "Technician_ID":"5",
    //           "Service_Request":"171018-000076",
    //           "Task_Number":"977",
    //           "Job_Description":"",
    //           "Expense_Method":"",
    //           "Labor_Method":"",
    //           "Travel_Method":"",
    //           "Material_Method":"",
    //           "Start_Date":"2017-10-18 07:26:00",
    //           "End_Date":"2017-10-20 07:36:00",
    //           "Duration":"2160",
    //           "Customer_Name":"ROLLS ROYCE MARINE OPERATIONS LTD",
    //           "Street_Address":"RAYNESWAY PARK DR",
    //           "City":"DERBY",
    //           "State":"",
    //           "Zip_Code":"DE21 7XX",
    //           "Service_Type":"Installation",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":""
    //        },
    //        {
    //           "Task_Status":"Assigned",
    //           "Technician_ID":"5",
    //           "Service_Request":"171019-000014",
    //           "Task_Number":"996",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Billable",
    //           "Travel_Method":"Billable",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-19 02:15:00",
    //           "End_Date":"",
    //           "Duration":"240",
    //           "Customer_Name":"ACTUATION VALVE & CONTROL LTD",
    //           "Street_Address":"8 WOODWARD RD",
    //           "City":"MERSEYSIDE",
    //           "State":"LAN",
    //           "Zip_Code":"L33 7UZ",
    //           "Name":"Baber, Mr. Vernon",
    //           "Service_Type":"Repair Order",
    //           "Activity_Id":"1811"
    //        },
    //        {
    //           "Task_Status":"Field Job Completed",
    //           "Technician_ID":"5",
    //           "Service_Request":"171020-000010",
    //           "Task_Number":"1004",
    //           "Job_Description":"",
    //           "Expense_Method":"Billable",
    //           "Labor_Method":"Billable",
    //           "Travel_Method":"Billable",
    //           "Material_Method":"Billable",
    //           "Start_Date":"2017-10-20 05:48:00",
    //           "End_Date":"",
    //           "Duration":"540",
    //           "Customer_Name":"ACTUATION VALVE & CONTROL LTD",
    //           "Street_Address":"8 WOODWARD RD",
    //           "City":"MERSEYSIDE",
    //           "State":"LAN",
    //           "Zip_Code":"L33 7UZ",
    //           "Service_Type":"Installation",
    //           "Name":"Baber, Mr. Vernon",
    //           "Activity_Id":"1886"
    //        }];
     
    this.apiService.getTaskDetails().subscribe(data =>{
        this.users  =data;
        console.log(this.users);
        this.tasklists = this.users.TaskDetails;
        }  )
}
 
  ionViewDidLoad() {
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.apiService.getTaskDetails().subscribe(data =>{
        this.users  =data;
        console.log(this.users);
        this.tasklists = this.users.TaskDetails;
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
          }, 3000);
        
        }  )
   
  }
  onclickOfTask(task){
    console.log("TASK " + JSON.stringify(task));
    
    this.selectedTask = task;
    var self=this;
    
      this.valueService.setTask(task, function (response) {

        GlobalSharedService.completedTask = false;

          this.notFutureDate = this.valueService.checkIfFutureDayTask(task);

          this.valueService.setIfFutureDateTask(this.notFutureDate);

          switch (task.Task_Status) {

              case 'Field Job Completed':

                  //$rootScope.showDebrief = true;
                  //$rootScope.showTaskDetail = true;
              
                  this.showStartWork = false;
                  this.showDebriefBtn = true;
                  GlobalSharedService.showWorkingBtn = false;
                  GlobalSharedService.showAccept = false;
                  GlobalSharedService.completedTask = true;

                  break;

              case 'Completed':

                  //$rootScope.showDebrief = true;
                  //$rootScope.showTaskDetail = true;

                  this.showStartWork = false;
                  this.showDebriefBtn = true;
                  GlobalSharedService.completedTask = true;
                  GlobalSharedService.showAccept = false;
                  GlobalSharedService.showWorkingBtn = false;
                  break;

              case 'Assigned':

                  //$rootScope.showDebrief = false;
                  // $rootScope.showTaskDetail = true;

                  this.showStartWork = true;
                  GlobalSharedService.showAccept = true;
                  this.showDebriefBtn = false;
                  GlobalSharedService.showWorkingBtn = false;
                  break;

              case 'Accepted':

                  //$rootScope.showDebrief = true;
                  //$rootScope.showTaskDetail = true;

                  this.showStartWork = true;
                  this.showDebriefBtn = false;
                  GlobalSharedService.showAccept = false;
                  GlobalSharedService.showWorkingBtn = true;
                  break;
              case 'Working':

                  //$rootScope.showDebrief = true;
                  //$rootScope.showTaskDetail = true;

                  this.showStartWork = true;
                  this.showDebriefBtn = true;
                  GlobalSharedService.showAccept = false;
                  GlobalSharedService.showWorkingBtn = false;
                  break;

              default:
                  break;
          }
      }.bind(this));
    this.navCtrl.push(FieldjobPage,{"task" : task});
    
  }

}
