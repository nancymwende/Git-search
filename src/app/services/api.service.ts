import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private username:string;
  private user:any;
  

  constructor(private http:HttpClient) {
    console.log ("service is now ready")
    this.username = "nancymwende";

    
   }
   getUserdetails(){
     return this.http.get('https://api.github.com/users/' + this.username).pipe(map(data=>{
       return data;
     }));
    
   }
  getRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?api_key=" + environment.api).pipe(map(data => {
      return data;
    }));  
}
}
     
     
     




















// map