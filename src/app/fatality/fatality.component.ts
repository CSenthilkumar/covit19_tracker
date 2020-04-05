import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-fatality',
  templateUrl: './fatality.component.html',
  styleUrls: ['./fatality.component.css']
})
export class FatalityComponent {

  fatalityList:any;
  genderList:any;
  comoList:any;
  private selectedLink: string;
  gend:boolean;
  age:boolean;
  como:boolean;
  
  constructor(private service:RestapiService) { 
    this.gend=true;
    this.age=false;
    this.como=false;
    this.getFatalityRateByAge();
    this.getFatalityRateByGender();
    this.getFatalityRateByComo();
  }

  getFatalityRateByAge(){
    let resp=this.service.getFatalityRateByAge();
    var res = [];
    console.log("Fatality Rate By Age::"+resp ); 
    resp.subscribe(data=>{
      for (var x in data){
        data.hasOwnProperty(x) && res.push(data[x])
     }
     for (this.fatalityList of res) {
       console.log(this.fatalityList.length);
     }
    });   
  }

  getFatalityRateByGender(){
    let resp=this.service.getFatalityRateBySex();
    var res = [];
    console.log("Fatality Rate By Sex::"+resp ); 
    resp.subscribe(data=>{
      for (var x in data){
        data.hasOwnProperty(x) && res.push(data[x])
     }
     for (this.genderList of res) {
       console.log(this.genderList.length);
     }
    });   
  }

  getFatalityRateByComo(){
    let resp=this.service.getFatalityRateByComo();
    var res = [];
    console.log("Fatality Rate By Comorbidities::"+resp ); 
    resp.subscribe(data=>{
      for (var x in data){
        data.hasOwnProperty(x) && res.push(data[x])
     }
     for (this.comoList of res) {
       console.log(this.comoList.length);
     }
    });   
  }

  setradio(e: string): void   
  {  
      this.selectedLink = e;  
      if(e=="gend") {
        this.gend=true;
        this.age=false;
        this.como=false;
      }else if(e=="age") {
        this.gend=false;
        this.age=true;
        this.como=false;
      } else if(e=="como") {
        this.gend=false;
        this.age=false;
        this.como=true;
      } else {
        this.gend=false;
        this.age=false;
        this.como=false;
      }
        
 }  

  isSelected(name: string): boolean   
  {  

      if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
      }  

      return (this.selectedLink == name); // if current radio button is selected, return true, else return false  
  } 

}
