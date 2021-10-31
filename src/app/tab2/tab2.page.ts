import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  medicineName: any;
  medicineDose: any;
  medicineStartDay: any;
  medicineEndDay: any;
  medicineTime: any;
  medicineColor: any;
  age:any;
  medicineList:any=[];


  constructor() {}

  submit(){
    let medicineObj={
      medicineName:this.medicineName,
      medicineDose:this.medicineDose,
      medicineStartDay:this.medicineStartDay,
      medicineEndDay:this.medicineEndDay,
      medicineTime:this.medicineTime,
      medicineColor:this.medicineColor,
    }
      this.medicineList.push(medicineObj);
     localStorage.setItem('medicineList',JSON.stringify(this.medicineList))
     console.log("submit" ,this.medicineList );
    this.clear();
  }

  clear(){
    this.medicineName="";
    this.medicineDose="";
    this.medicineStartDay="";
    this.medicineEndDay="";
    this.medicineTime="";
    this.medicineColor="";

    console.log("clear", this.medicineList)

  }
  // getConvertToUTCTimeFormat(date) {
  //   return moment(date, 'DD/MM/YYYY').format();
  // }

  }
