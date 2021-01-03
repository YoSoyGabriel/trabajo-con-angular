import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
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
  pageSize = 3; 
  total:number; 
  startSlice = 1 ; 
  endSlice = 6; 
  count = 0;
  pageSizes = [3, 6, 9];
  
  constructor(private route: ActivatedRoute,
              private ApiService:ApiService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
        if(params.get("id")){
            this.ApiService.getUserPosts(params.get('id')).subscribe(posts => {
                this.postsList = posts; 
                this.loading != this.loading; 
            });
        } else {
            this.ApiService.getPosts().subscribe(posts => {
              this.postsList = posts; 
              this.loading = !this.loading; 
              this.postFilter = posts.slice(this.startSlice, this.endSlice);
          }); 
        }
     });
  }

   public getPostUser(id:number){
     return this.ApiService.all_user.filter(x => x.id == id)[0].name; 
   }

   handlePageChange(event) {
    this.loading = !this.loading; 
    this.postFilter = []; 

    setTimeout(  () => {
      this.loading = !this.loading; 
      this.page = event.target;
      this.startSlice = this.endSlice; 
      this.endSlice = this.endSlice + 6; 
      this.postFilter = this.postsList.slice(this.startSlice, this.endSlice);
    }, 1000)
    console.log(this.startSlice, this.endSlice);
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    // this.postFilter = this.postsList.slice(); 
  }
}
