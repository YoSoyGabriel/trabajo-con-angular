import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/Photo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoList:Photo[]; 
  constructor(private route: ActivatedRoute,
              private ApiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idAlbum = params.get("id");
      this.ApiService.getAlbumPhotos(idAlbum).subscribe( photos => {
        this.photoList = photos; 
        console.log(this.photoList);
      });
    })
  }

}
