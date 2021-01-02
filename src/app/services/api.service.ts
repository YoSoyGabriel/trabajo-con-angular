import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/Albums';
import { Photo } from '../models/Photo';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "https://jsonplaceholder.typicode.com"; 

  constructor(private httpClient:HttpClient) { }

  
  public getAllUsers():Observable<User>{
    return this.httpClient.get<User>(`${this.API_URL}/users`);
  }

  public getPhotos():Observable<Photo>{
    return this.httpClient.get<Photo>(`${this.API_URL}/photos`);
  }

  public getTodos():Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.API_URL}/todos`);
  }

  public getComments():Observable<Comment>{
    return this.httpClient.get<Comment>(`${this.API_URL}/comments`);
  }

  public getPosts():Observable<Post>{
    return this.httpClient.get<Post>(`${this.API_URL}/posts`);
  }

  public getAlbums():Observable<Album>{
    return this.httpClient.get<Album>(`${this.API_URL}/albums`);
  }
}
