import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-datails',
  templateUrl: './medicine-datails.page.html',
  styleUrls: ['./medicine-datails.page.scss'],
})
export class MedicineDatailsPage implements OnInit {
  medicineList: any=[];

  constructor() { }

  ngOnInit() {
    this.medicineList=JSON.parse(localStorage.getItem('medicineList')) || []
    console.log('all data',this.medicineList)
  }

}
