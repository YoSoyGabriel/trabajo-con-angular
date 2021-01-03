import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {

  user:any; 
  constructor(private route:ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.ApiService.getAllUsersById(params.get('id')).subscribe(user => {
          this.user = user; 
          console.log(this.user);
        });
    });
  }

}
