import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private username:string;

  constructor(private http:HttpClient) {
    console.log ("service is now ready")
    this.username = "nancymwende"
   }
   getUserdetails(){
     return this.http.get('https://api.github.com/users/' + this.username).pipe(map(data=>{
       return data;
     }));
   }
}

// map