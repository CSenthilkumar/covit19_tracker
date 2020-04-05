import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent {
  //Variable Declarations
  selectCountry:any;
  activeCases:any;
  allList:any[];
  countryname:string;
  all:boolean;
  country:boolean;
  private selectedLink: string;
  dirty: number=0;
  contry:number=0;
  cases:number=0;
  death:number=0;
  region:number=0;
  order:string ;

  constructor(private service:RestapiService) { 
    this.countryname = "India";
    this.selectedLink = "all";
    this.getCoronaRR();
    this.getCoronaAll();
  }

  isSelectedCountry(){
    if(this.selectCountry.report.flag == null){
      console.log("Null");
      this.countryname ="";
      return true;
    } else {
      console.log(this.countryname);
    }

    return false;
  }

  orderBy(value:string){
    console.log("call...");
    switch(value){
      case 'Country':
        this.contry = this.contry+1;
        if(this.contry%2 != 0)          this.order= "Asc";
        else          this.order = "Dec";
        break;
      case 'Cases':
        this.cases = this.cases+1;
        if(this.cases%2 != 0)         this.order= "Asc";
        else          this.order = "Dec";
        break;
      case 'Deaths':
        this.death = this.death+1;
        if(this.death%2 != 0)        this.order= "Asc";
        else          this.order = "Dec";
        break;
      case 'Region':
        this.region = this.region+1;
        if(this.region%2 != 0)        this.order= "Asc";
        else          this.order = "Dec";
        break;
    }
  }

  onSort(data:string){
    console.log(this.dirty,"Sort clicked",data);
    this.dirty= this.dirty+1;
    let cnt1:number;
    let cnt2:number;
    console.log("country:",this.contry," cases:",this.cases, " death:",this.death, " region:",this.region);
    this.orderBy(data);
    if( this.order == "Asc"){
      cnt1=1;
      cnt2=-1;
    } else {
      cnt1 = -1;
      cnt2 = 1;
    }

    this.allList.sort((obj1, obj2) => {
      switch(data){
        case 'Country':
          if (obj1.Country > obj2.Country) {
            return cnt1;
          }
          if (obj1.Country < obj2.Country) {
            return cnt2;
          }
          return 0;
          break;
        case 'Cases':
          if (obj1.Cases > obj2.Cases) {
            return cnt1;
          }
          if (obj1.Cases < obj2.Cases) {
            return cnt2;
          }
          return 0;
          break;
        case 'Deaths':
          if (obj1.Deaths > obj2.Deaths) {
            return cnt1;
          }
          if (obj1.Deaths < obj2.Deaths) {
            return cnt2;
          }
          return 0;
          break;
        case 'Region':
          if (obj1.Region > obj2.Region) {
            return cnt1;
          }
          if (obj1.Region < obj2.Region) {
            return cnt2;
          }
          return 0;
          break;
        default:
          break;
        
      }
      
    });
  }
        
  setradio(e: string): void   
  {  
      this.selectedLink = e;  
      if(e=="all"){
        this.all=true;
        this.country=false;
      }else{
        this.country=true;
        this.all=false;
      }     
 }  

  isSelected(name: string): boolean   
  {  

      if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
      }  

      return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }   

  getCoronaRR(){
    let resp=this.service.getCORONAUsersOfIndia(this.countryname);
    console.log("Corona Country Response::"+resp +" country = "+this.countryname); 
    resp.subscribe(data=>{
      this.selectCountry=data;
      for (this.activeCases of this.selectCountry.report.active_cases){
        console.log(this.activeCases);
      }
    });
  }

  getCoronaAll(){
    var res = [];
    let resp=this.service.getCORONAAllUsers();
    console.log("All Country Response::"+resp ); 
    resp.subscribe(data=>{
      for (var x in data){
        data.hasOwnProperty(x) && res.push(data[x])
     }
     for (this.allList of res){
       console.log(this.allList.length);
     }
    });
  }
 
}
