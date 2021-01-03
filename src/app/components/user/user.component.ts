import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // guardar el listado de usuarios en esta variable.
  listUsers:User[]; 
  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {

    // obtener una lista de usuarios 
    this.ApiService.getAllUsers().subscribe( users => {
      this.listUsers = users; 
    });
  }
}
