import { CasesTimeSeries, StateWise, Tested } from './india.interface';
import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent {

  indiaAllList:any;
  indiaAllList1:any;
  cases_time_series:CasesTimeSeries[];
  statewise:StateWise[];
  tested:Tested[];
  indiaStateList = new Array();
  selectedDistList = new Array();
  indiaStateCount = new Array();
  stateCount:Number;
  indTotal:number =0;
  States:string;
  dirty: number=0;
  state:number=0;
  confirmed:number=0;
  active:number=0;
  recovered:number=0;
  deaths:number=0;
  order:string ;

  constructor(private service:RestapiService) {
    this.callIndiaAllUserData1();
    this.onDistrict("Tamil Nadu");
    this.callIndiaAllUserData();

  }

  callIndiaAllUserData() {
    let resp=this.service.getIndiaAllUsers();
    resp.subscribe(data=>{
      this.indiaAllList=data;
      for(let data of this.indiaAllList) {
        for(let distric of data.districtData){
          this.indiaStateList.push({"state":data.state, "district":distric.district, "count":distric.confirmed});
        }
      }
    }); 
  }

  callIndiaAllUserData1() {
    let resp=this.service.getIndiaAllUsers1();
    resp.subscribe(data=>{
      this.indiaAllList1=data;
      console.log(this.indiaAllList1);
      this.cases_time_series = this.indiaAllList1.cases_time_series;
      this.statewise = this.indiaAllList1.statewise;
      this.tested = this.indiaAllList1.tested;
    }); 
  }
   
  onDistrict(data:string){
     if(this.selectedDistList.length>0){
        this.selectedDistList.length=0;
     }
    for(let i = 0; i<this.indiaStateList.length; i++){
      if(this.indiaStateList[i].state == data){
        this.selectedDistList.push(this.indiaStateList[i]);
      } 
    }

   }

  orderBy(value:string){
    switch(value){
      case 'state':
        this.state = this.state+1;
        if(this.state%2 != 0)          this.order= "Asc";
        else          this.order = "Dec";
        break;
      case 'confirmed':
        this.confirmed = this.confirmed+1;
        if(this.confirmed%2 != 0)         this.order= "Asc";
        else          this.order = "Dec";
        break;
      case 'active':
        this.active = this.active+1;
        if(this.active%2 != 0)         this.order= "Asc";
        else          this.order = "Dec";
        break; 
      case 'recovered':
        this.recovered = this.recovered+1;
        if(this.recovered%2 != 0)         this.order= "Asc";
        else          this.order = "Dec";
        break;  
      case 'deaths':
        this.deaths = this.deaths+1;
        if(this.deaths%2 != 0)         this.order= "Asc";
        else          this.order = "Dec";
        break;     
    }
  }

  onSort(data:string){
    console.log(data);
    let cnt1:number;
    let cnt2:number;
    this.orderBy(data);
    if( this.order == "Asc"){
      cnt1=1;
      cnt2=-1;
    } else {
      cnt1 = -1;
      cnt2 = 1;
    }
    this.statewise.sort((obj1, obj2) => {
      switch(data){
        case 'state':
          if (obj1.state > obj2.state) {
            return cnt1;
          }
          if (obj1.state < obj2.state) {
            return cnt2;
          }
          return 0;
        case 'confirmed':
          if (obj1.confirmed > obj2.confirmed) {
            return cnt1;
          }
          if (obj1.confirmed < obj2.confirmed) {
            return cnt2;
          }
          return 0;
        case 'active':
          if (obj1.active > obj2.active) {
            return cnt1;
          }
          if (obj1.active < obj2.active) {
            return cnt2;
          }
          return 0;          
        case 'recovered':
          if (obj1.recovered > obj2.recovered) {
            return cnt1;
          }
          if (obj1.recovered < obj2.recovered) {
            return cnt2;
          }
          return 0;
        case 'deaths':
          if (obj1.deaths > obj2.deaths) {
            return cnt1;
          }
          if (obj1.deaths < obj2.deaths) {
            return cnt2;
          }
          return 0;
      }
    });
  }

}
