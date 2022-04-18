import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APIService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubComponent } from './components/github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, GithubComponent, ReposComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
