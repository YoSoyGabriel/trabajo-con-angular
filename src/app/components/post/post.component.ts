import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  loading:boolean = true; 
  public postsList:Post[]; 
  public postFilter:Post[];

  page = 1 ; 
  pageSize = 8;  
  startSlice:number = 1; 
  endSlice:number; 
  count = 0; 
  
  constructor(private route: ActivatedRoute,
              private ApiService:ApiService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
        if(params.get("id")){
            this.ApiService.getUserPosts(params.get('id')).subscribe(posts => {
                this.postsList = posts; 
                this.postFilter = posts;
                this.count = this.postsList.length; 
                this.loading = !this.loading; 
            });
        } else {
            this.ApiService.getPosts().subscribe(posts => {
              this.postsList = posts; 
              this.postFilter = posts;
              this.count = this.postsList.length; 
              this.loading  = !this.loading ;  
          }); 
        }
     });
  }


   handlePageChange(event) {
      this.loading = !this.loading; 
      this.postFilter = []; 

      setTimeout(  () => {
        this.loading = !this.loading;
        this.postFilter = this.postsList;  
        this.page = event;
        this.startSlice = event * this.pageSize;   
        window.scroll(0, 0);
      }, 1000) 
  }

  
}
