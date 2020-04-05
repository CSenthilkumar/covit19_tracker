import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
