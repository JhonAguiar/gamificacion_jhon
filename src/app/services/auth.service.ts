import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {  }

  login(elem : any){
    return this.http.post("https://localhost:44369/api/home", elem.value)
  }

  getQuestions(){
    return this.http.get("../../assets/json/fuente.json")
  }

}
