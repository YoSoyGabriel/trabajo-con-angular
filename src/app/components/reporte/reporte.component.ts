import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit,  OnDestroy  {

  usuarios:User[]; 
  posts:Post[]; 

  serviceSuscription:Subscription; 
  
  constructor(private ApiService:ApiService) { }

  async ngOnInit() {
     await this.requestData();   
  }


  ngOnDestroy() {
		  this.serviceSuscription.unsubscribe();
    }

    // extrar la informacion desde el api 
    // usuarios, posts 
  async requestData(){
    this.serviceSuscription = this.ApiService.getAllUsers().subscribe( usuarios => {
        this.usuarios = usuarios; 
        console.log(this.usuarios);
      }); 

    this.serviceSuscription = this.ApiService.getPosts().subscribe(posts => {
        this.posts = posts ; 
        console.log(this.posts);
      }); 
   }


   //obtiene la cantidad de post realizado por cada usuario 
   getCantidadPost(user:number):number{
      let listPost =  this.posts.filter( x => x.userId == user);
      return listPost.length; 
   }

}
