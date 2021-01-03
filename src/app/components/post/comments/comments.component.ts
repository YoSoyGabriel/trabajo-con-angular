import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  listComments:Comment[]; 
  constructor(private ApiService:ApiService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id") ; 
      this.ApiService.getComments(id).subscribe(comments => {
        this.listComments = comments; 
        console.log(this.listComments);
      });

    }) 
  }

}
