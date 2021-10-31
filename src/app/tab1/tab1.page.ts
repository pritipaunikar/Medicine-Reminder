import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  medicineList: any=[];

  constructor(private router:Router) {}
  ngOnInit() {
    this.medicineList=JSON.parse(localStorage.getItem('medicineList')) || []
    console.log('all data',this.medicineList)
  }

  openDetails() {
    let navigationExtras: NavigationExtras = {
      state: {
        medicine: this.medicineList,
        commingFrom: '/tabs/tab1/medicine-datails',
      },
    };
    this.router.navigate(['/tabs/tab1/medicine-datails'], navigationExtras);
  }

}
