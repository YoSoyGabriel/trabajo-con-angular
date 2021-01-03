import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trabajo-con-angular';
  showFiller = false;
  constructor(private ApiService:ApiService){}

   ngOnInit(){
     this.ApiService.getAllUsers().subscribe(listUser => {
       this.ApiService.all_user = listUser; 
     }); 
   }
}
