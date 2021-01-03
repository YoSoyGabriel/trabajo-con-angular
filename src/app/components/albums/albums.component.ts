import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Albums';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:Album[]; 
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
     this.ApiService.getAlbums().subscribe( album => {
       this.albums = album; 
     });
  }

}
