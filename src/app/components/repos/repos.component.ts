import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public repos:any = []

  constructor(private APIService:APIService) {
    this.APIService.getRepos().subscribe((response:any)=>{
      this.repos=response;
      console.log (response);
    })

   }

  ngOnInit(): void {
  }

}
