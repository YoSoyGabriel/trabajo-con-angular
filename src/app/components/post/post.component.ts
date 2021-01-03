import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  public postsList:Post[]; 
  
  constructor(private route: ActivatedRoute,
              private ApiService:ApiService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
        if(params.get("id")){
            this.ApiService.getUserPosts(params.get('id')).subscribe(posts => {
                this.postsList = posts; 
            });
        } else {
            this.ApiService.getPosts().subscribe(posts => {
              this.postsList = posts; 
          }); 
        }
     });
  }

   public getPostUser(id:number){
     return this.ApiService.all_user.filter(x => x.id == id)[0].name; 
   }
}
