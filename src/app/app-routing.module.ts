import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/Albums/photos/photos.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { PostComponent } from './components/post/post.component'; 
import { UserDetalleComponent } from './components/user/user-detalle/user-detalle.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: "", redirectTo: "/posts", pathMatch: "full"},
  {path: 'posts', children: [
    {path: "", component: PostComponent},
    {path: ":id", component: PostComponent},
    {path:"comments/:id", component: CommentsComponent}
  ]},
  {path: 'album', children: [
    {path: "list", component: AlbumsComponent},
    {path:"photos/:id", component: PhotosComponent}
  ]},
  {path: 'user', children: [
    {path: "list", component: UserComponent},
    {path:"detalle/:id", component: UserDetalleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
