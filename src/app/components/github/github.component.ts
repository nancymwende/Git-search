import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  public User: any = [];
  public repos: any = [];
  public Username ="";

  constructor(private APIService: APIService) {
    this.APIService.getUserdetails().subscribe((response: any) => {
      this.User = response;
    });
    this.APIService.getRepos().subscribe((response: any) => {
      this.repos = response;
      console.log(response);
    });
  }
  

    findUser(){
      this.APIService.getUsername(this.Username)
      this.APIService.getUserdetails().subscribe((response: any) => {
      this.User = response;
    })
  
    this.APIService.getRepos().subscribe((response: any) => {
      this.repos = response;
      console.log(response);
    })

}



ngOnInit(): void {
  
  }
}