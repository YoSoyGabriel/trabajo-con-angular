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

  
  public getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.API_URL}/users`);
  }

  public getAllUsersById(id:string):Observable<any>{
    return this.httpClient.get<any>(`${this.API_URL}/users/${id}`);
  }


  public getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.API_URL}/posts`);
  }

  public getComments(id:string):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.API_URL}/comments?postId=${id}`);
  }


  public getUserPosts(idPost:string):Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.API_URL}/users/${idPost}/posts`);
  }


  public createPost(post:any):Observable<any>{
    return this.httpClient.post<any>(`${this.API_URL}/posts`, post );
  }
}
