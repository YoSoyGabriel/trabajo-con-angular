import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trabajo-con-angular';

  constructor(private ApiService:ApiService){}

   ngOnInit(){
      this.ApiService.getPhotos().subscribe(res => {
        console.log(res[1]);
      }); 
   }
}
