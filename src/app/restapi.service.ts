import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovitIndia } from './india/india.interface';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }
  
  /**
   * 
   * @param countryname  
   * https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/India
   */
  public getCORONAUsersOfIndia(countryname:string) {
    let url ="https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/"+countryname;
    return this.http.get(url);
  }

  public getCORONAAllUsers() {
    let url ="https://covid19-server.chrismichael.now.sh/api/v1/CountriesWhereCoronavirusHasSpread";
    return this.http.get(url);
  }

  public getIndiaAllUsers()  {
    let url ="https://api.covid19india.org/v2/state_district_wise.json";
    return this.http.get(url);
  }

  public getIndiaAllUsers1(): Observable<CovitIndia>  {
    let url ="https://api.covid19india.org/data.json";
    return this.http.get<CovitIndia>(url);
  }
  

  public getFatalityRateByAge() {
    let url = "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByAge";
    return this.http.get(url);
  }

  public getFatalityRateBySex() {
    let url = "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateBySex";
    return this.http.get(url);
  }

  public getFatalityRateByComo() {
    let url = "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByComorbidities";
    return this.http.get(url);
  }

}
